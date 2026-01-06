import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function getLatestNews(
  location = "USA",
  category = "All categories"
) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: `Search for 10 recent and trending news stories in ${location} for the category: ${category}.
               Return the data as a JSON array of objects with these keys:
               "title", "source", "summary" (approx 3 sentences), "url", and "category".
               DO not add json string in front of the array. `,
    config: {
      systemInstruction:
        "You are a news researcher. Use Google Search to find current events. Return ONLY a valid array.",
      tools: [{ googleSearch: {} }],
    },
  });
  return JSON.parse(response.text);
}
