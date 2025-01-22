"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { guardarEmail } from "../actions"

export function EmailStep({ respuestas }: { respuestas: any }) {
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await guardarEmail(email, respuestas)
      setMensaje("¡Gracias! Te enviaremos pronto las mejores opciones de hoteles.")
    } catch (error) {
      setMensaje("Hubo un error al guardar tu información. Por favor, intenta de nuevo.")
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">¡Último paso!</h2>
      <p className="text-center">Déjanos tu email para enviarte las mejores opciones de hoteles en Medellín.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
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

