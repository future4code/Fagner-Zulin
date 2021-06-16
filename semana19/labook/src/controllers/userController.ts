import { Request, Response } from "express";
import { signupBusiness } from "../business/user/signupBusiness";
import { loginBusiness } from "../business/user/loginBusiness";

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

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await loginBusiness(email, password);

      res.status(200).send({ token });
    } catch (error) {
      res.send({ message: error.message }).status(400);
    }
  };
}
