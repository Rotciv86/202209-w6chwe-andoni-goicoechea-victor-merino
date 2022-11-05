import type { Request, Response, NextFunction } from "express";
import Robot from "../../database/models/Robots";
import getRobots from "./robotsControllers";

describe("Given a getRobots controller", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn() as Partial<NextFunction>;

  describe("When it receives a response and find return list of robots", () => {
    test("Then it should call the respond method status with 200 code", async () => {
      const expectedStatus = 200;

      Robot.find = jest.fn();

      await getRobots(req as Request, res as Response, next as NextFunction);

      expect(res.status).toHaveBeenLastCalledWith(expectedStatus);
    });
  });

  describe("When it receives a response and find rejects it", () => {
    test("Then its should call its method error", async () => {
      Robot.find = jest.fn().mockRejectedValueOnce(new Error(""));

      await getRobots(null, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalled();
    });
  });
});
