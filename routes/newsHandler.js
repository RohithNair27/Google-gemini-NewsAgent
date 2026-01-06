import { getLatestNews } from "../agent.js";

export async function handleNewsRequests(req, res) {
  switch (req.url) {
    case "/news":
      let body = "";
      if (req.method === "POST") {
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            body = JSON.parse(body);
            console.log(body?.location);
            console.log(body?.category);
            let content = await getLatestNews(body.location, body.category);
            if (!content) {
              throw new Error("Empty content");
            }
            res.writeHead(200, { "content-type": "application/json" });
            res.write(JSON.stringify(content));
          } catch (error) {
            res.statusCode = 400;
            console.error("error", error.message);
            res.write(JSON.stringify({ message: error.message }));
          } finally {
            res.end();
          }
        });
      }
      break;
  }
}
