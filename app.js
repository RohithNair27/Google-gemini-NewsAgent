import http from "http";
import { mainRouter } from "./routes/router.js";
import { config } from "./config.js";
import { InitializeDatabase } from "./db/init.js";
const PORT = config.PORT;

InitializeDatabase();
http
  .createServer(async (req, res) => {
    await mainRouter(req, res);
  })
  .listen(PORT, () => console.log(`Server started on ${PORT}`));
