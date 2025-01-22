"use server"

export async function guardarEmail(email: string, respuestas: any) {
  // Aquí iría la lógica para guardar el email y las respuestas en tu base de datos
  console.log("Email guardado:", email)
  console.log("Respuestas del usuario:", respuestas)
  // Simular un retraso para imitar una operación de base de datos
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { success: true }
}

