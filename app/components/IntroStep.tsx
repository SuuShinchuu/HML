import React from "react"

interface IntroStepProps {
  onSiguiente: () => void
}

export const IntroStep: React.FC<IntroStepProps> = ({ onSiguiente }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Empieza aquí tu búsqueda!</h2>
      <button 
        onClick={onSiguiente} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Empezar
      </button>
    </div>
  )
} 