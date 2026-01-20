import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,

  CLIENT_REDIRECT_URI: process.env.CLIENT_REDIRECT_URI,

  GEMINI_API_KEY: process.env.GEMINI_API_KEY,

  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
