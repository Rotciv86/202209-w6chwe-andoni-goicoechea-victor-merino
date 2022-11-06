import express from "express";
import { deleteRobot, getRobots } from "../controllers/robotsControllers.js";
import routes from "./routes.js";

const { getRobotsRoute, deleteRobotRoute } = routes;

const robotsRouter = express.Router();

robotsRouter.get(getRobotsRoute, getRobots);
robotsRouter.delete(deleteRobotRoute, deleteRobot);

export default robotsRouter;
