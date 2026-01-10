import { Console } from "console";
import url from "url";
import { storeGeminiKey, getGeminiKey } from "../utils/auth.js";
// import { storeKey } from "../agent.js";

export async function handleGeminiKey(req, res) {
  let parsedUrl = url.parse(req.url, true);

  switch (parsedUrl.pathname) {
    case "/auth/check-userId":
      if (req.method === "GET") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            body = JSON.parse(body);
            let isExists = getGeminiKey(body.userId);
            if (isExists) {
              res.writeHead(200, {
                "content-type": "application/json",
              });
              res.end(
                JSON.stringify({
                  exists: true,
                  message: "User key found.",
                })
              );
            } else {
              res.writeHead(404, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  exists: false,
                  message: "User not found, kindly enter your key again.",
                })
              );
            }
          } catch (error) {}
        });
      }
    case "/auth/set-keys":
      if (req.method === "POST") {
        const authHeader = req.headers["authorization"];
        let body = "";
        req.on("date", (chunk) => (body += chunk.toString()));
        req.on("end", () => {
          try {
            if (authHeader) {
              let body = JSON.parse(body);
              storeKey(authHeader.split(" ")[1]);
              let isStored = storeGeminiKey(body.userId, authHeader);
              if (isStored.success) {
                res.writeHead(200, {
                  "content-type": "application/json",
                });
                res.end(
                  JSON.stringify({
                    userId: isStored.userId,
                    message: "Successfully key is stored",
                  })
                );
              } else {
                res.writeHead(400, {
                  "content-type": "application/json",
                });
                res.end(
                  JSON.stringify({
                    userId: null,
                    message: "User not found, kindly enter your key again.",
                  })
                );
              }
            }
          } catch (error) {}
        });
        //unsafe but for testing
      }
  }

  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify({ message: "Key is stored" }));
}
