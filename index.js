import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function getLatestNews() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Provide a comprehensive news briefing with the following sections:
      
      1. Top 5 News from India: For each, provide a 10-15 line detailed summary and a direct link to the article with images links.
      2. Top 5 Global News: For each, provide a 10-15 line detailed summary and a direct link to the article with image links.
      
      Ensure the summaries are factual and the links are clickable. Return the result in a array`,
    config: {
      systemInstruction:
        "You are a professional news anchor and researcher. You prioritize accuracy, provide citations, and format your output clearly with Markdown headers.",
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
}
