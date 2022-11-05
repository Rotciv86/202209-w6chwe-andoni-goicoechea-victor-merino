import "./loadEnvironment.js";
import chalk from "chalk";
import debugCreator from "debug";
import express from "express";
import morgan from "morgan";
import databaseConnection from "./database/databaseConnection.js";

const debug = debugCreator("robots:index");
const app = express();
const { PORT: port, DB: databaseUrl } = process.env;

app.use(morgan("dev"));

(async () => {
  await databaseConnection(databaseUrl);
  app.listen(port, () => {
    debug(chalk.green(`Server listening on http://localhost:${port}`));
  });
})();
