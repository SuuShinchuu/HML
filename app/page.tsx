"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FechasStep } from "./components/FechasStep"
import { PresupuestoStep } from "./components/PresupuestoStep"
import { ZonasStep } from "./components/ZonasStep"
import { EmailStep } from "./components/EmailStep"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

interface Respuestas {
  fechas: {
    checkIn: Date | null;
    checkOut: Date | null;
  };
  presupuesto: string;
  zonas: string[];
}

export default function BuscadorHoteles() {
  const [step, setStep] = useState(0)
  const [respuestas, setRespuestas] = useState<Respuestas>({
    fechas: {
      checkIn: null,
      checkOut: null
    },
    presupuesto: "",
    zonas: [],
  })

  const siguientePaso = (respuesta: any) => {
    setRespuestas({ ...respuestas, ...respuesta })
    setStep(step + 1)
  }

  const pasos = [
    <FechasStep key="fechas" onSiguiente={siguientePaso} respuestas={respuestas} />,
    <PresupuestoStep key="presupuesto" onSiguiente={siguientePaso} />,
    <ZonasStep key="zonas" onSiguiente={siguientePaso} />,
    <EmailStep key="email" respuestas={respuestas} />,
  ]

  return (
    <div className="min-h-screen relative text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide-image02.jpg-5Qbzg6oP2wkLeHNnVMZOSn7oi5Gw97.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Hoteles Medellín</h1>
          <p className="text-xl text-center mb-12">
            Encuentra el hotel perfecto para tu estadía en la Ciudad de la Eterna Primavera
          </p>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {pasos[step]}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

