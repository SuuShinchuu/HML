import { FaHotel } from "react-icons/fa"

export function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaHotel className="text-2xl" />
          <span className="text-xl font-bold">Hoteles Medellín</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sobre Medellín
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

