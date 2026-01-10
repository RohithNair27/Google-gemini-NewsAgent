export async function getNews(location, category) {
  let data = {
    location: location,
    category: category,
  };
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function setApiKey(GEMINI_API_KEY) {
  console.log(GEMINI_API_KEY, "key before sening");
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/set-key`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GEMINI_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export async function checkApiKeyExists(userId) {
  let body = {
    userId: userId,
  };
  let response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/auth/check-userId`,
    {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(body),
    }
  );
  console.log(response);
  // return response
}
