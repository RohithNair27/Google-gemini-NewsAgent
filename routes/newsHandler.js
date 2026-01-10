import { getLatestNews } from "../agent.js";
import url from "url";

export async function handleNewsRequests(req, res) {
  console.log("iNSIDE NEWS");
  let parsedUrl = url.parse(req.url, true); // splits the web address and create objects out of it.
  let pathname = parsedUrl.pathname;
  let query = parsedUrl.query;
  switch (pathname) {
    case "/news":
      let body = "";
      console.log(req.method);
      if (req.method === "POST") {
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          console.log("body");
          try {
            body = JSON.parse(body);
            console.log(body?.location);
            console.log(body?.category);
            // let content = await getLatestNews(body?.location, body?.category);
            // if (!content) {
            //   throw new Error("Empty content");
            // }
            console.log(body);
            res.writeHead(200, {
              "content-type": "application/json",
            });
            res.write(JSON.stringify("working"));
          } catch (error) {
            res.statusCode = 400;
            console.error("error", error.message);
            res.write(JSON.stringify({ message: error.message }));
          } finally {
            res.end();
          }
        });
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify("Route not found"));
        res.end();
      }
      break;
  }
}
