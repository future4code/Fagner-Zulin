import { Request, Response } from "express";

export const pingController = {
  ping(req: Request, res: Response) {
    res.status(200).send({ message: "pong" });
  },
};
