import mongoose from "mongoose";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("robots:database");

const databaseConnection = async (databaseUrl: string) => {
  try {
    await mongoose.connect(databaseUrl);
    debug(chalk.green(`Connected to the database successfully`));
  } catch (error: unknown) {
    debug(
      chalk.red(
        `There was an error connecting to database: ${(error as Error).message}`
      )
    );
  }
};

export default databaseConnection;
