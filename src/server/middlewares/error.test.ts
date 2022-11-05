import type { Request, Response } from "express";
import errorEndpoint from "./error";

describe("Given the errorEndpoint middleware", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response method status with 404", () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const status = 404;

      errorEndpoint(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(status);
    });

    test("Then it should invoke the method json with an endpoint error", () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const error = { error: "Endpoint not found" };

      errorEndpoint(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(error);
    });
  });
});
