import "./loadEnvironment.js";
import databaseConnection from "./database/databaseConnection.js";
import startServer from "./server/startServer.js";
import errorEndpoint from "./server/middlewares/error.js";
import express from "express";

const { PORT: port, MONGO_URL: databaseUrl } = process.env;

const app = express();

app.use(errorEndpoint);

(async () => {
  await databaseConnection(databaseUrl);
  await startServer(+port);
})();
