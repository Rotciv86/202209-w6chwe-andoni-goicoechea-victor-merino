import "./loadEnvironment.js";
import chalk from "chalk";
import debugCreator from "debug";
import express from "express";
import morgan from "morgan";

const debug = debugCreator("robots:index");
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));

app.listen(port, () => {
  debug(chalk.green(`Server listening on http://localhost:${port}`));
});
