import { handleNewsRequests } from "./newsHandler.js";
import { handleGeminiKey } from "./authHandler.js";
import url from "url";

export async function mainRouter(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const { pathname } = url.parse(req.url, true);

  if (pathname === "/news") return handleNewsRequests(req, res);
  if (pathname === "/auth/set-key") return handleGeminiKey(req, res);

  res.writeHead(404);
  res.end();
}
