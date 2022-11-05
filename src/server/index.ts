import "../loadEnvironment.js";
import "../database/databaseConnection.js";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouter.js";
import express from "express";

const app = express();

app.use(morgan("dev"));

app.use("/robots", robotsRouter);

export default app;
