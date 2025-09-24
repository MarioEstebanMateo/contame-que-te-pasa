import express from 'express'
import { Groq } from 'groq-sdk'

const router = express.Router()

// Initialize Groq client
let groq = null

// Check if API key is available
if (process.env.GROQ_API_KEY) {
  groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
  })
} else {
  console.error('❌ GROQ_API_KEY not found in environment variables')
  console.log('Available env vars:', Object.keys(process.env).filter(key => key.includes('GROQ')))
}

// Problem solver endpoint
router.post('/solve-problem', async (req, res) => {
  try {
    console.log('🔍 Recibida petición:', req.body);
    
    // Check if Groq client is initialized
    if (!groq) {
      console.log('❌ Groq client no inicializado');
      return res.status(500).json({
        error: 'El servicio de IA no está configurado correctamente. Verifica la API Key de Groq.'
      })
    }

    const { problem } = req.body

    if (!problem || problem.trim().length === 0) {
      console.log('❌ Problema vacío o no proporcionado');
      return res.status(400).json({
        error: 'El problema es requerido y no puede estar vacío.'
      })
    }

    console.log('✅ Problema recibido:', problem);

    // Create the prompt for the AI
    const prompt = createProblemSolvingPrompt(problem)
    console.log('📝 Prompt creado para IA');

    // Call Groq API
    console.log('🤖 Llamando a Groq API...');
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: getSystemPrompt()
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      model: 'llama-3.1-8b-instant', // Updated to current model
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 1,
      stream: false
    })

    console.log('✅ Respuesta recibida de Groq');
    const aiResponse = chatCompletion.choices[0]?.message?.content

    if (!aiResponse) {
      console.log('❌ No se recibió respuesta de la IA');
      throw new Error('No se recibió respuesta de la IA')
    }

    console.log('📋 Parseando respuesta...');
    // Parse the AI response
    const parsedSolution = parseAIResponse(aiResponse)

    console.log('✅ Enviando respuesta al cliente');
    res.json(parsedSolution)

  } catch (error) {
    console.error('Error al procesar el problema:', error)
    
    if (error.status === 429) {
      return res.status(429).json({
        error: 'Límite de solicitudes excedido. Por favor, espera un momento antes de intentar de nuevo.'
      })
    }

    if (error.status === 401) {
      return res.status(500).json({
        error: 'Error de configuración del servicio de IA. Por favor, contacta al administrador.'
      })
    }

    res.status(500).json({
      error: 'Error al generar la solución. Por favor, inténtalo de nuevo.'
    })
  }
})

// Helper function to create the problem-solving prompt
function createProblemSolvingPrompt(problem) {
  return `
PROBLEMA A RESOLVER:
${problem}

Por favor, proporciona un análisis estructurado y soluciones prácticas para este problema.
  `.trim()
}

// System prompt for the AI
function getSystemPrompt() {
  return `Eres un asistente inteligente especializado en resolver problemas de manera estructurada y efectiva. Tu objetivo es ayudar a las personas a encontrar soluciones prácticas y viables para sus problemas.

INSTRUCCIONES:
1. Analiza el problema de manera objetiva y sistemática
2. Identifica las causas raíces cuando sea posible
3. Proporciona soluciones prácticas y realizables
4. Ordena las soluciones por efectividad y viabilidad
5. Incluye pasos concretos cuando sea apropiado
6. Considera el contexto y la urgencia proporcionados
7. Mantén un tono empático pero profesional
8. Si el problema requiere ayuda profesional especializada, mencionalo

FORMATO DE RESPUESTA:
Estructura tu respuesta de la siguiente manera:

**ANÁLISIS:**
[Análisis claro y conciso del problema]

**SOLUCIONES:**
1. [Solución principal con pasos específicos]
2. [Solución alternativa]
3. [Solución de respaldo si aplica]

**RECOMENDACIONES:**
- [Recomendaciones adicionales]
- [Consejos para prevenir problemas similares]

**TIEMPO ESTIMADO:** [Estimación realista del tiempo necesario]

Responde en español y mantén un enfoque práctico y constructivo.`
}

// Helper function to parse AI response into structured format
function parseAIResponse(aiResponse) {
  try {
    // Try to extract structured information from the AI response
    const lines = aiResponse.split('\n').filter(line => line.trim())
    
    let analysis = ''
    let solutions = []
    let recommendations = []
    let estimatedTime = ''
    let currentSection = ''
    let currentSolution = ''

    for (const line of lines) {
      const trimmedLine = line.trim()
      
      if (trimmedLine.includes('**ANÁLISIS:**') || trimmedLine.includes('ANÁLISIS:')) {
        currentSection = 'analysis'
        continue
      } else if (trimmedLine.includes('**SOLUCIONES:**') || trimmedLine.includes('SOLUCIONES:')) {
        currentSection = 'solutions'
        continue
      } else if (trimmedLine.includes('**RECOMENDACIONES:**') || trimmedLine.includes('RECOMENDACIONES:')) {
        currentSection = 'recommendations'
        continue
      } else if (trimmedLine.includes('**TIEMPO ESTIMADO:**') || trimmedLine.includes('TIEMPO ESTIMADO:')) {
        currentSection = 'time'
        continue
      }

      if (currentSection === 'analysis' && trimmedLine) {
        analysis += (analysis ? ' ' : '') + trimmedLine
      } else if (currentSection === 'solutions' && trimmedLine) {
        if (trimmedLine.match(/^\d+\./) || trimmedLine.startsWith('-')) {
          if (currentSolution) {
            solutions.push(currentSolution.trim())
          }
          currentSolution = trimmedLine.replace(/^\d+\.\s*/, '').replace(/^-\s*/, '')
        } else {
          currentSolution += ' ' + trimmedLine
        }
      } else if (currentSection === 'recommendations' && trimmedLine) {
        if (trimmedLine.startsWith('-') || trimmedLine.startsWith('•')) {
          recommendations.push(trimmedLine.replace(/^[-•]\s*/, ''))
        }
      } else if (currentSection === 'time' && trimmedLine) {
        estimatedTime = trimmedLine.replace(/^\*\*.*?\*\*\s*/, '')
      }
    }

    // Add the last solution if exists
    if (currentSolution) {
      solutions.push(currentSolution.trim())
    }

    // If structured parsing failed, fall back to the raw response
    if (!analysis && solutions.length === 0) {
      analysis = aiResponse
    }

    return {
      analysis: analysis || 'Análisis detallado del problema proporcionado.',
      solutions: solutions.length > 0 ? solutions : [aiResponse],
      recommendations: recommendations.length > 0 ? recommendations : [],
      estimatedTime: estimatedTime || 'Variable según la complejidad'
    }

  } catch (error) {
    console.error('Error parsing AI response:', error)
    
    // Fallback response
    return {
      analysis: 'He analizado tu problema y aquí tienes mi respuesta:',
      solutions: [aiResponse],
      recommendations: [],
      estimatedTime: 'Variable'
    }
  }
}

export default router