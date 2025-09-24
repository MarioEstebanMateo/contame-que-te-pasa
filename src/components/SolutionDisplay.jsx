import React from 'react'
import { RefreshCw, AlertCircle, CheckCircle, Clock, Target, Lightbulb, ArrowRight } from 'lucide-react'

const SolutionDisplay = ({ solution, onNewProblem }) => {
  if (solution?.error) {
    return (
      <div className="card p-6 md:p-8 animate-slide-up">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Error al generar solución
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {solution.error}
          </p>
          <button
            onClick={onNewProblem}
            className="btn-primary flex items-center space-x-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Intentar de nuevo</span>
          </button>
        </div>
      </div>
    )
  }

  const {
    analysis = '',
    solutions = [],
    recommendations = [],
    estimatedTime = 'No especificado'
  } = solution

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <span>Análisis y Solución</span>
          </h2>
        </div>
        
        {estimatedTime && (
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4" />
            <span>Tiempo estimado: {estimatedTime}</span>
          </div>
        )}
      </div>

      {/* Analysis Section */}
      {analysis && (
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-500" />
            <span>Análisis del Problema</span>
          </h3>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {analysis}
            </p>
          </div>
        </div>
      )}

      {/* Solutions Section */}
      {solutions && solutions.length > 0 && (
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Soluciones Propuestas</span>
          </h3>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-primary-500"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    {solution.title && (
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {solution.title}
                      </h4>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {solution.description || solution}
                    </p>
                    {solution.steps && solution.steps.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          Pasos a seguir:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          {solution.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations Section */}
      {recommendations && recommendations.length > 0 && (
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <ArrowRight className="w-5 h-5 text-purple-500" />
            <span>Recomendaciones Adicionales</span>
          </h3>
          <ul className="space-y-3">
            {recommendations.map((rec, index) => (
              <li 
                key={index}
                className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
              >
                <ArrowRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-1" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Button */}
      <div className="text-center pt-4">
        <button
          onClick={onNewProblem}
          className="btn-secondary flex items-center space-x-2 mx-auto px-6 py-3"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Resolver otro problema</span>
        </button>
      </div>
    </div>
  )
}

export default SolutionDisplay