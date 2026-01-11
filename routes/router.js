import { handleNewsRequests } from "./newsHandler.js";
import { handleGeminiKey } from "./authHandler.js";
import url from "url";

export async function mainRouter(req, res) {
  // handling cors
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const { pathname } = url.parse(req.url, true);
  if (pathname === "/news") return handleNewsRequests(req, res);
  else if (pathname.startsWith("/auth")) return handleGeminiKey(req, res);

  res.writeHead(404);
  res.end();
}
