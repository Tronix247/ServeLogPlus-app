// src/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai"

// Create the client with your API key
// IMPORTANT: in Netlify, set env var as VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY as string)

// Export a model instance
export const geminiPro = genAI.getGenerativeModel({ model: "gemini-pro" })

// Optional helper
export async function generateText(prompt: string): Promise<string> {
  const result = await geminiPro.generateContent(prompt)
  return result.response.text()
}
