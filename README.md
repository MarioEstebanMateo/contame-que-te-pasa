# 🤖 Contame que te pasa

Una aplicación web que utiliza inteligencia artificial para ayudar a los usuarios a resolver problemas de manera estructurada y efectiva.

## 🚀 Características

- **Interfaz Intuitiva**: Diseño moderno y fácil de usar
- **Responsivo**: Optimizado para uso en móviles y escritorio
- **Modo Oscuro**: Switch para alternar entre temas claro y oscuro
- **IA Avanzada**: Utiliza modelos de lenguaje de Groq para generar soluciones
- **Arquitectura Modular**: Frontend en React + Backend en Node.js
- **Respuestas Estructuradas**: Análisis detallado y soluciones paso a paso
- **Categorización**: Organiza problemas por categorías y niveles de urgencia

## 🛠️ Tecnologías

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos

### Backend
- **Node.js** - Runtime de JavaScript
- **Express** - Framework web minimalista
- **Groq SDK** - API de inteligencia artificial
- **Helmet** - Middleware de seguridad
- **CORS** - Manejo de recursos de origen cruzado

## 📋 Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Clave API de Groq (gratuita en [console.groq.com](https://console.groq.com/keys))

## 🚀 Instalación

### 1. Clona el repositorio
```bash
git clone https://github.com/MarioEstebanMateo/contame-que-te-pasa.git
cd contame-que-te-pasa
```

### 2. Instala las dependencias del frontend
```bash
npm install
```

### 3. Instala las dependencias del backend
```bash
cd server
npm install
cd ..
```

### 4. Configura las variables de entorno
```bash
cd server
cp .env.example .env
```

Edita el archivo `.env` y agrega tu clave API de Groq:
```env
GROQ_API_KEY=tu_clave_api_de_groq_aqui
PORT=3001
NODE_ENV=development
```

### 5. Inicia la aplicación
```bash
# Opción 1: Ejecutar frontend y backend simultáneamente
npm run dev:full

# Opción 2: Ejecutar por separado
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

## 🌐 Uso

1. Abre tu navegador y ve a `http://localhost:5173`
2. Describe tu problema con el mayor detalle posible
3. Agrega contexto adicional si es necesario
4. Haz clic en "Buscar solución"
5. Revisa el análisis y las soluciones generadas por la IA
6. Implementa las soluciones paso a paso

## 📱 Características de la Interfaz

- **Diseño Responsivo**: Se adapta perfectamente a móviles, tablets y escritorio
- **Modo Oscuro**: Cambia entre temas claro y oscuro con un solo clic
- **Animaciones Suaves**: Transiciones elegantes para mejor experiencia de usuario
- **Interfaz Simplificada**: Enfocada en el problema y la solución, sin distracciones
- **Análisis Inteligente**: Respuestas estructuradas con pasos detallados

## 🤖 Modelos de IA Soportados

La aplicación utiliza los modelos de Groq:
- **Mixtral 8x7B** (predeterminado) - Equilibrio entre velocidad y calidad
- **Llama2 70B** - Respuestas más detalladas
- **Gemma 7B** - Alternativa rápida y eficiente

## 🔧 Scripts Disponibles

### Frontend
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción

### Backend
- `npm run server` - Inicia el servidor de backend
- `cd server && npm run dev` - Inicia el servidor con recarga automática

### Conjunto
- `npm run dev:full` - Inicia frontend y backend simultáneamente

## 🚀 Deployment

### Vercel (Recomendado)
1. Fork este repositorio
2. Conecta tu repositorio a Vercel
3. Configura las variables de entorno en Vercel
4. Despliega automáticamente

### Variables de entorno para producción
```env
GROQ_API_KEY=tu_clave_api_de_groq
NODE_ENV=production
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes algún problema o pregunta:
- Abre un [issue](https://github.com/MarioEstebanMateo/contame-que-te-pasa/issues)
- Contacta al desarrollador

## 🙏 Agradecimientos

- [Groq](https://groq.com/) por proporcionar API de IA gratuita y rápida
- [React](https://react.dev/) por el framework de UI
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Lucide](https://lucide.dev/) por los iconos
- La comunidad open source por las herramientas y librerías

---

**¡Hecho con ❤️ usando React, Node.js e Inteligencia Artificial!**