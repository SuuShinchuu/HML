import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

const zonasMedellin = [
  { nombre: "El Poblado", descripcion: "Zona turística con muchos restaurantes y vida nocturna" },
  { nombre: "Laureles", descripcion: "Barrio residencial con ambiente local" },
  { nombre: "Estadio", descripcion: "Área deportiva y residencial con excelente vida nocturna" },
  { nombre: "Envigado", descripcion: "Área suburbana tranquila y segura" },
  { nombre: "Belén", descripcion: "Barrio tradicional con buena gastronomía" },
  { nombre: "La Candelaria (Centro)", descripcion: "Centro histórico y cultural de la ciudad" },
]

export function ZonasStep({ onSiguiente }: { onSiguiente: (respuesta: { zonas: string[] }) => void }) {
  const [zonasSeleccionadas, setZonasSeleccionadas] = useState<string[]>([])

  const toggleZona = (zona: string) => {
    setZonasSeleccionadas((prev) => (prev.includes(zona) ? prev.filter((z) => z !== zona) : [...prev, zona]))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">¿Qué zonas de Medellín te interesan?</h2>
      <div className="space-y-4">
        {zonasMedellin.map((zona) => (
          <div key={zona.nombre} className="flex items-start space-x-3 bg-white/20 p-3 rounded-md">
            <Checkbox
              id={zona.nombre}
              checked={zonasSeleccionadas.includes(zona.nombre)}
              onCheckedChange={() => toggleZona(zona.nombre)}
              className="mt-1"
            />
            <div>
              <label htmlFor={zona.nombre} className="font-medium">
                {zona.nombre}
              </label>
              <p className="text-sm text-white/80">{zona.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => onSiguiente({ zonas: zonasSeleccionadas })}
        className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
      >
        Ver resultados
      </Button>
    </motion.div>
  )
}

