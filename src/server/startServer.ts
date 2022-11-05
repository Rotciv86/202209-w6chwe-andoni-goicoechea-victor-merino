import Debug from "debug";
import chalk from "chalk";
import app from "./index.js";

const debug = Debug("robots:server:startSever");

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.blue(`Server listening on http://localhost:${port}`));
      resolve(true);
    });

    server.on("error", (error) => {
      debug(chalk.red("Error connecting to database: ", error.message));
      reject(error);
    });
  });

export default startServer;
