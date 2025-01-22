"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { guardarEmail } from "../actions"

const hotelesRecomendados = [
  {
    nombre: "Hotel Nutibara",
    precio: 80000,
    zona: "La Candelaria (Centro)",
    imagen: "/placeholder.svg?height=100&width=100",
  },
  {
    nombre: "Hotel Poblado Alejandría",
    precio: 120000,
    zona: "El Poblado",
    imagen: "/placeholder.svg?height=100&width=100",
  },
  { nombre: "Hotel Florencia Plaza", precio: 90000, zona: "Laureles", imagen: "/placeholder.svg?height=100&width=100" },
  { nombre: "Hotel Ayenda Mitic", precio: 70000, zona: "Belén", imagen: "/placeholder.svg?height=100&width=100" },
  {
    nombre: "Hotel Portón Medellín",
    precio: 100000,
    zona: "El Poblado",
    imagen: "/placeholder.svg?height=100&width=100",
  },
]

export function ResultadosStep({ respuestas }: { respuestas: any }) {
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await guardarEmail(email)
      setMensaje("¡Gracias! Te enviaremos más información a tu correo.")
    } catch (error) {
      setMensaje("Hubo un error al guardar tu correo. Por favor, intenta de nuevo.")
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <h2 className="text-2xl font-semibold text-center">Hoteles recomendados para ti en Medellín</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {hotelesRecomendados.map((hotel) => (
          <motion.div
            key={hotel.nombre}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/20 p-4 rounded-lg shadow-lg"
          >
            <img
              src={hotel.imagen || "/placeholder.svg"}
              alt={hotel.nombre}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-lg">{hotel.nombre}</h3>
            <p className="text-yellow-300 font-bold">${hotel.precio.toLocaleString()} COP / noche</p>
            <p className="text-sm">Zona: {hotel.zona}</p>
          </motion.div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold text-center">¿Quieres recibir más opciones de hoteles?</h3>
        <Input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/20 border-white/30 text-white placeholder-white/70"
        />
        <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
          Enviar
        </Button>
      </form>
      {mensaje && <p className="text-center text-yellow-300">{mensaje}</p>}
    </motion.div>
  )
}

