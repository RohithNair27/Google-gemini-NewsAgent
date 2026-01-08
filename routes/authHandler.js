import url from "url";
// import { storeKey } from "../agent.js";

export async function handleGeminiKey(req, res) {
  let parsedUrl = url.parse(req.url, true);
  const authHeader = req.headers["authorization"];
  console.log("All Headers:", req.headers);
  console.log("Method:", req.method);
  console.log("Auth Header:", authHeader);

  //unsafe but for testing
  if (authHeader) {
    storeKey(authHeader.split(" ")[1]);
    console.log("Key stored in memory for testing.");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Success" }));
}
