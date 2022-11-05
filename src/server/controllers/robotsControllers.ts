import type { NextFunction, Request, Response } from "express";
import Robot from "../../database/models/Robots.js";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError.js";

const debug = debugCreator("robots:server:controllers:robotsControllers");

const getRobots = async (req: Request, res: Response, next: NextFunction) => {
  try {
    debug("Request /robots");
    const robotsList = await Robot.find();
    res.status(200).json({ robots: robotsList });
  } catch (error: unknown) {
    next(
      new CustomError(
        (error as Error).message,
        500,
        "There was a server error, try again later"
      )
    );
  }
};

export default getRobots;
