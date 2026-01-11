const authenticatedUsers = new Set();

const userGeminiKeys = {};

export function storeGeminiKey(userId, geminiKey) {
  console.log(userId, geminiKey);
  if (!geminiKey) {
    return { success: false, userId: null };
  }
  authenticatedUsers.add(userId);
  userGeminiKeys[userId] = geminiKey;
  console.log(userGeminiKeys, "all the keys");
  return { success: true, userId: userId };
}

export function getGeminiKey(userId) {
  if (!userId) return null;
  return userGeminiKeys[userId] || null;
}
