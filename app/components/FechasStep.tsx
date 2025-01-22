"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import type { DateRange } from "react-day-picker"

export function FechasStep({ onSiguiente }: { onSiguiente: (respuesta: { fechas: string }) => void }) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })

  const handleContinue = () => {
    if (date?.from && date?.to) {
      const fechasFormateadas = `${format(date.from, "dd/MM/yyyy", { locale: es })} al ${format(date.to, "dd/MM/yyyy", { locale: es })}`
      onSiguiente({ fechas: fechasFormateadas })
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">¿Cuándo quieres visitar Medellín?</h2>
      <div className="flex justify-center">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          locale={es}
          className="rounded-md border bg-white/20 text-white"
        />
      </div>
      <Button
        onClick={handleContinue}
        className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
        disabled={!date?.from || !date?.to}
      >
        {date?.from && date?.to ? "Siguiente" : "Selecciona las fechas"}
      </Button>
    </motion.div>
  )
}

