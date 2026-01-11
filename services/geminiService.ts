
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const askGemini = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "Lo siento, la consultoría IA no está disponible en este momento.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "Eres el consultor experto de 'Cruz Automations'. Tu objetivo es explicar cómo los servicios de automatización, domótica e IA de Cruz Automations pueden ayudar a los clientes a mejorar su productividad y estilo de vida. Sé profesional, tecnológico y amable.",
        temperature: 0.7,
      },
    });

    return response.text || "No pude generar una respuesta clara.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Hubo un error al conectar con nuestro asesor inteligente.";
  }
};
