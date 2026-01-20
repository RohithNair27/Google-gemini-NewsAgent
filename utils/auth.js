import fs, { access } from "fs";
import path from "path";
import querystring from "querystring";
import { config } from "../config.js";
import { OAuth2Client } from "google-auth-library";
import { INSERT_USER_TOKEN, INSERT_USER } from "../db/init.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Load keys from JSON file
let userGeminiKeys = {};

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

// send the url to fontned
export function getGoogleAuthUrl(req, res) {
  const root_url = "https://accounts.google.com/o/oauth2/v2/auth";
  const parameters = querystring.stringify({
    client_id: config.GOOGLE_CLIENT_ID,
    redirect_uri: "http://localhost:5173" || config.CLIENT_REDIRECT_URI,
    access_type: "offline", // This provides the refresh token
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/generative-language.retriever", // for gemini access
    ].join(" "),
  });

  return `${root_url}?${parameters}`;
}

// use the code we send a request to get token from google
export async function getGoogleJWTToken(code) {
  const root_url = "https://oauth2.googleapis.com/token";
  const query_parameter = {
    code: code,
    client_id: config.GOOGLE_CLIENT_ID,
    client_secret: config.GOOGLE_CLIENT_SECRET,
    redirect_uri: "http://localhost:5173" || config.CLIENT_REDIRECT_URI,
    grant_type: "authorization_code",
  };
  const queryString = new URLSearchParams(query_parameter).toString();
  const urlWithParams = `${root_url}?${queryString}`;
  let response = await fetch(urlWithParams, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.json();
  let verifiedData = await verifyGoogleToken(data?.id_token);
  console.log(verifiedData);
}
// If attacker manages to use a different app - client ID change
async function verifyGoogleToken(idToken) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
