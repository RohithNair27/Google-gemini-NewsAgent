import { Console } from "console";
import url from "url";
import { storeGeminiKey, getGeminiKey } from "../utils/auth.js";
import { randomUUID } from "crypto";

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
    case "/auth/set-key":
      if (req.method === "POST") {
        let authHeader = req.headers["authorization"];
        let token = authHeader.split(" ")[1];
        try {
          const userId = randomUUID();
          let isStored = storeGeminiKey(userId, token);
          console.log(isStored);
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
                userId: isStored.userId,
                message: "Unable to create",
              })
            );
          }
        } catch (error) {
          res.writeHead(500, { "content-type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Internal Server Error",
            })
          );
        }
      }
  }
}
