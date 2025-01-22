import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function PresupuestoStep({ onSiguiente }: { onSiguiente: (respuesta: { presupuesto: string }) => void }) {
  const [presupuesto, setPresupuesto] = useState("")

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">¿Cuál es tu presupuesto por noche?</h2>
      <Input
        type="number"
        placeholder="Ej: 100000"
        value={presupuesto}
        onChange={(e) => setPresupuesto(e.target.value)}
        className="bg-white/20 border-white/30 text-white placeholder-white/70"
      />
      <Button
        onClick={() => onSiguiente({ presupuesto })}
        className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
      >
        Siguiente
      </Button>
    </motion.div>
  )
}

