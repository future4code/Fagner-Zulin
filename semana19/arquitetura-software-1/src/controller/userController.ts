import { Request, Response } from "express";
import * as userBusiness from "../business/userBusiness";

export default class UserController {
  getAll = async (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers;

      const users = await userBusiness.getAll(authorization);

      res.send({ users });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  deleteUser = async (req: Request, res: Response) => {};
}
