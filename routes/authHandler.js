import { Console } from "console";
import url from "url";
import {
  storeGeminiKey,
  getGeminiKey,
  getGoogleAuthUrl,
  getGoogleJWTToken,
} from "../utils/auth.js";
import { randomUUID } from "crypto";

export function getDataFromBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.on("end", () => {
      try {
        if (!body) {
          resolve({});
        } else {
          resolve(JSON.parse(body));
        }
      } catch (error) {
        reject(new Error("Invalid JSON format"));
      }
    });
  });
}

export async function handleGeminiKey(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname);

  switch (parsedUrl.pathname) {
    case "/auth/google":
      let url = getGoogleAuthUrl();
      if (req.method == "GET") {
        res.writeHead(302, { "content-typ": "application/json" });
        res.end(JSON.stringify({ url: url }));
      }
      break;
    case "/auth/google/token":
      if (req.method == "POST") {
        let body = await getDataFromBody(req, res);
        let response = await getGoogleJWTToken(body.google_code);
        res.end(JSON.stringify(response));
      }
      break;
    case "/auth/check-userId":
      if (req.method === "GET") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            body = JSON.parse(body);
            console.log(body);
            let isExists = getGeminiKey(body.userId);
            if (isExists) {
              res.writeHead(200, {
                "content-type": "application/json",
              });
              res.end(
                JSON.stringify({
                  exists: true,
                  message: "User key found.",
                }),
              );
            } else {
              res.writeHead(404, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  exists: false,
                  message: "User not found, kindly enter your key again.",
                }),
              );
            }
          } catch (error) {}
        });
      }
      break;
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
              }),
            );
          } else {
            res.writeHead(400, {
              "content-type": "application/json",
            });
            res.end(
              JSON.stringify({
                userId: isStored.userId,
                message: "Unable to create",
              }),
            );
          }
        } catch (error) {
          res.writeHead(500, { "content-type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Internal Server Error",
            }),
          );
        }
      }
      break;
    default:
      res.end("Not found");
  }
}
