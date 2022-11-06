import "../loadEnvironment.js";
import "../database/databaseConnection.js";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouter.js";
import express from "express";
import routes from "./routers/routes.js";

const app = express();

app.use(morgan("dev"));

const { robots } = routes;

app.use(robots, robotsRouter);

export default app;
