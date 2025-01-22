import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Hoteles Medellín</h3>
            <p>Hotelesmedellin.co - Tu guía para encontrar el mejor hospedaje en Medellín</p>
          </div>
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
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 MedellínStay. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

