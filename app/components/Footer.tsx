import React from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={`bg-black text-white ${className}`}>
      <div className="text-center">
        {/* 
        <h3 className="text-xl font-bold mb-2">Hoteles Medellín</h3>
        <p>Hotelesmedellin.co - Tu guía para encontrar el mejor hospedaje en Medellín</p>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-yellow-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-yellow-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-yellow-300">
            <FaInstagram />
          </a>
        </div>
        */}
        <p>&copy; 2025 HotelesMedellin.co. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer


