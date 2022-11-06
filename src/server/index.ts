import "../loadEnvironment.js";
import "../database/databaseConnection.js";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouter.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use("/robots", cors(), robotsRouter);

export default app;
