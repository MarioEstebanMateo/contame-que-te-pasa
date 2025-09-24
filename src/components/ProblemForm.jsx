import React, { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

const ProblemForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    problem: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.problem.trim()) return
    
    onSubmit(formData)
  }

  return (
    <div className="card p-6 md:p-8 animate-slide-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="problem" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Describe tu problema
          </label>
          <textarea
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            placeholder="Ejemplo: No logro mantener mi casa ordenada, siempre está desordenada y no sé por dónde empezar..."
            className="input-field resize-none h-40"
            required
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={loading || !formData.problem.trim()}
            className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generando solución...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Buscar solución</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProblemForm