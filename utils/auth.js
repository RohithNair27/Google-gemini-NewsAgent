import fs from "fs";
import path from "path";

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
