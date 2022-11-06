import type { NextFunction, Request, Response } from "express";
import Robot from "../../database/models/Robots.js";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError.js";
import mongoose from "mongoose";

const debug = debugCreator("robots:server:controllers:robotsControllers");

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const deleteRobot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idRobot } = req.params;

  if (!mongoose.isValidObjectId(idRobot)) {
    res.status(404).json({ message: "Unable to delete the robot: invalid ID" });
    return;
  }

  const { token } = req.query;

  try {
    if (token !== process.env.TOKEN) {
      res
        .status(498)
        .json({ message: "Unable to delete the robot: invalid token" });
      return;
    }

    const robot = await Robot.findById(idRobot);

    if (!robot) {
      res
        .status(404)
        .json({ message: "Unable to delete the robot: robot not found" });
      return;
    }

    await Robot.findByIdAndDelete(idRobot);

    res.status(200).json({ robot });
    debug(`The robot with the ${idRobot} has been deleted`);
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Unable to interact with database, try again later"
    );

    next(customError);
  }
};
