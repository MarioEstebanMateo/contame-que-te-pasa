import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProblemForm from './components/ProblemForm'
import SolutionDisplay from './components/SolutionDisplay'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [solution, setSolution] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    setDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark))
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleProblemSubmit = async (problemData) => {
    setLoading(true)
    try {
      const response = await fetch('/api/solve-problem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(problemData),
      })

      if (!response.ok) {
        throw new Error('Error al procesar la solicitud')
      }

      const data = await response.json()
      setSolution(data)
    } catch (error) {
      console.error('Error:', error)
      setSolution({
        error: 'Hubo un problema al generar la solución. Por favor, inténtalo de nuevo.',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleNewProblem = () => {
    setSolution(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Contame que te pasa
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Describe tu problema y obtén soluciones inteligentes y estructuradas 
              generadas por inteligencia artificial.
            </p>
          </div>

          {!solution ? (
            <ProblemForm onSubmit={handleProblemSubmit} loading={loading} />
          ) : (
            <SolutionDisplay 
              solution={solution} 
              onNewProblem={handleNewProblem}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App