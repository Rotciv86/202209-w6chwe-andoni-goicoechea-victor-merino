import "../loadEnvironment.js";
import "../database/databaseConnection.js";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouter.js";
import express from "express";
import routes from "./routers/routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));

const { robots } = routes;
app.use("/robots", cors(), robotsRouter);

export default app;
