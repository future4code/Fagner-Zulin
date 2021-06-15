import { Request, Response } from "express";
import { signupBusiness } from "../business/user/signupBusiness";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const token = await signupBusiness({ name, email, password });

      res.send({ token });
    } catch (error) {
      res.send({ message: error.message }).status(400);
    }
  };
}
