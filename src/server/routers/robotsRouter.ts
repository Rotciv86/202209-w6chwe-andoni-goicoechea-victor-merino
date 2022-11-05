import express from "express";
import getRobots from "../controllers/robotsControllers.js";
import routes from "./routes.js";

const { getRobotsRoute } = routes;

const robotsRouter = express.Router();

robotsRouter.get(getRobotsRoute, getRobots);

export default robotsRouter;
