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
      // Validar que el email sea una cadena no vacía
      if (typeof email !== 'string' || !email) {
        throw new Error("El email debe ser una cadena no vacía.")
      }

      // Validar que las respuestas sean un objeto plano
      if (typeof respuestas !== 'object' || respuestas === null || !isPlainObject(respuestas)) {
        throw new Error("Las respuestas deben ser un objeto plano.")
      }

      // Limpiar el objeto respuestas
      const cleanedRespuestas = Object.fromEntries(
        Object.entries(respuestas).filter(([key, value]) =>
          typeof value === 'string' ||
          typeof value === 'number' ||
          Array.isArray(value) // Permitir arreglos
        )
      );

      // Convertir "Presupuesto" a número si es una cadena
      if (cleanedRespuestas.presupuesto && typeof cleanedRespuestas.presupuesto === 'string') {
        cleanedRespuestas.presupuesto = parseFloat(cleanedRespuestas.presupuesto);
      }

      // Convertir "Zonas" a una cadena separada por comas si es un array
      if (Array.isArray(cleanedRespuestas.zonas)) {
        cleanedRespuestas.zonas = cleanedRespuestas.zonas.join(", ");
      }

      console.log("Cuerpo limpio antes de enviar a Airtable:", cleanedRespuestas);

      // Variables de entorno y URL de Airtable
      const appId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
      const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
      const airtableUrl = `https://api.airtable.com/v0/${appId}/Emails`;

      // Crear el cuerpo de la solicitud
      const body = JSON.stringify({
        fields: {
          Email: email,
          Presupuesto: cleanedRespuestas.presupuesto,
          Zonas: cleanedRespuestas.zonas,
        },
      });

      console.log("URL de Airtable:", airtableUrl);
      console.log("Cuerpo de la solicitud:", body);

      // Hacer la solicitud a Airtable
      const response = await fetch(airtableUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error("Error al guardar en Airtable");
      }

      setMensaje("¡Gracias! Te enviaremos pronto las mejores opciones de hoteles.");
    } catch (error) {
      console.error("Error en el proceso de guardar el email:", error);
      setMensaje("Hubo un error al guardar tu información. Por favor, intenta de nuevo.");
    }
  }

  // Función para verificar si un objeto es plano
  const isPlainObject = (obj: any): boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]' && Object.getPrototypeOf(obj) === Object.prototype;
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
