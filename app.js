import http from "http";
import "dotenv/config";

import { handleNewsRequests } from "./routes/newshandler.js";
const PORT = process.env.PORT || 5050;

http
  .createServer(async (req, res) => {
    await handleNewsRequests(req, res);
  })
  .listen(PORT, () => console.log(`Server started on ${PORT}`));
