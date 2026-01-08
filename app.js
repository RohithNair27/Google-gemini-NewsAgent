import http from "http";
import "dotenv/config";
import { mainRouter } from "./routes/router.js";

const PORT = process.env.PORT || 5050;

http
  .createServer(async (req, res) => {
    await mainRouter(req, res);
  })
  .listen(PORT, () => console.log(`Server started on ${PORT}`));
