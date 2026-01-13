import http from "http";
import { mainRouter } from "./routes/router.js";
import { config } from "./config.js";
const PORT = config.PORT;

http
  .createServer(async (req, res) => {
    console.log("reached");
    await mainRouter(req, res);
  })
  .listen(PORT, () => console.log(`Server started on ${PORT}`));
