import React from 'react'
import { Heart, Github, Coffee } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 mb-4">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>usando React, Node.js e IA</span>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://buymeacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Coffee className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Contame que te pasa. Una herramienta para resolver problemas con inteligencia artificial.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer