"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import type { DateRange } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
          className="rounded-md border bg-white/95 text-gray-900"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center px-10",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex w-full",
            head_cell: "text-gray-500 w-9 font-normal text-[0.8rem] rounded-md",
            row: "flex w-full mt-2",
            cell: "text-center text-sm relative p-0 rounded-md focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-100/50 [&:has([aria-selected])]:bg-gray-100",
            day: "h-9 w-9 p-0 font-normal",
            day_range_end: "day-range-end",
            day_selected:
              "bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:text-gray-900 focus:bg-yellow-500 focus:text-gray-900",
            day_today: "bg-gray-100 text-gray-900",
            day_outside:
              "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-100/50 aria-selected:text-gray-500 aria-selected:opacity-30",
            day_disabled: "text-gray-500 opacity-50",
            day_range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-900",
            day_hidden: "invisible",
          }}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
          }}
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

