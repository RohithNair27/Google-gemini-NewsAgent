import { randomUUID } from 'crypto';

const authenticatedUsers = new Set();

const userGeminiKeys = {};

export function storeGeminiKey(geminiKey) {
  if (!geminiKey) {
    return { success: false, userId: null };
  }
  
  const userId = randomUUID();
  authenticatedUsers.add(userId);
  userGeminiKeys[userId] = geminiKey;
  
  return { success: true, userId: userId };
}

export function getGeminiKey(userId) {
  if (!userId) return null;
  return userGeminiKeys[userId] || null;
}