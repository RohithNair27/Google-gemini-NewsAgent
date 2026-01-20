import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// THIS IS TOTALL UNSAFE BUT FOR TESTING I AM ADDING THE API_KEY_HERE THAT I GET FROM THE USER
// const GEMINI_API_KEY = null;
// export function storeKey(KEY) {
//   GEMINI_API_KEY = KEY;
// }
// console.log(GEMINI_API_KEY);
// const ai = new GoogleGenAI({
//   apiKey: GEMINI_API_KEY,
// });

export async function getLatestNews(
  location = "USA",
  category = "All categories",
) {
  const rawResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Search for 10 recent and trending news stories in ${location} for ${category}.
             Return a JSON array where each object has:
             "id", "title", "source_name","url" "summary of 300 words", and "suggested_search_query_for_image".
             
             IMPORTANT:
             1. Use real URLs from the search results in the "url" field.
             2. Since direct image URLs are hard to extract, provide a "suggested_search_query_for_image" 
                that I can use with a dedicated image API (like Google Custom Search) if needed.`,
    config: {
      systemInstruction: `You are a news researcher. 
                      Return ONLY a raw JSON array. 
                      Do NOT include markdown formatting, backticks, or the word 'json'. 
                      Your response must start with '[' and end with ']'.`,
      tools: [{ googleSearch: {} }],
      temperature: 0,
    },
  });
  const cleanedResponse = rawResponse.text.replace(/```json|```/g, "").trim();
  return JSON.parse(cleanedResponse);
}
