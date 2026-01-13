import fs, { access } from "fs";
import path from "path";
import querystring from "querystring";
import { config } from "../config.js";

const keysFilePath = path.join(process.cwd(), "keys.json");

// Load keys from JSON file
let userGeminiKeys = {};
try {
  if (fs.existsSync(keysFilePath)) {
    const keysData = fs.readFileSync(keysFilePath, "utf8");
    userGeminiKeys = JSON.parse(keysData);
  }
} catch (error) {
  console.error("Error loading keys from file:", error);
  userGeminiKeys = {};
}

export function storeGeminiKey(userId, geminiKey) {
  console.log(userId, geminiKey);
  if (!geminiKey) {
    return { success: false, userId: null };
  }

  userGeminiKeys[userId] = geminiKey;

  // Save to JSON file
  try {
    fs.writeFileSync(keysFilePath, JSON.stringify(userGeminiKeys, null, 2));
  } catch (error) {
    console.error("Error saving keys to file:", error);
  }

  console.log(userGeminiKeys, "all the keys");
  return { success: true, userId: userId };
}

export function getGeminiKey(userId) {
  console.log(userId);
  if (!userId) return null;
  return userGeminiKeys[userId] || null;
}

export function getGoogleAuthUrl(req, res) {
  const root_url = "https://accounts.google.com/o/oauth2/v2/auth";
  const parameters = querystring.stringify({
    client_id: config.GOOGLE_CLIENT_ID,
    redirect_uri: "http://localhost:5173" || config.CLIENT_REDIRECT_URI,
    access_type: "offline",
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  });

  return `${root_url}?${parameters}`;
}

export async function getGoogleJWTToken(id_token) {
  const root_url = "https://oauth2.googleapis.com/token";
  const query_parameter = {
    client_id: config.GOOGLE_CLIENT_ID,
    client_secret: config.GOOGLE_CLIENT_SECRET,
  };
  const queryString = new URLSearchParams(query_parameter).toString();
  const urlWithParams = `${root_url}?${queryString}`;
  let response = await fetch(urlWithParams);
  console.log(response);
}
