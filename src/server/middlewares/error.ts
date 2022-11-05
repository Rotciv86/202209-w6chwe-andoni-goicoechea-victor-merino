import type { Request, Response } from "express";

const errorEndpoint = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export default errorEndpoint;
