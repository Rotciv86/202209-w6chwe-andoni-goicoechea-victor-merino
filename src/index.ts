import "./loadEnvironment.js";
import databaseConnection from "./database/databaseConnection.js";
import startServer from "./server/startServer.js";

const { PORT: port, DB: databaseUrl } = process.env;

(async () => {
  await databaseConnection(databaseUrl);
  await startServer(+port);
})();
