import http from "http";
import "dotenv/config";

const PORT = process.env.PORT || 5050;

http
  .createServer((req, res) => {
    if (req == "/news") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Latest newss</h1>");
      res.end();
    }
  })
  .listen(PORT, () => console.log(`Server started on ${PORT}`));
