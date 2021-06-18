import { Request, Response } from "express";
import { loginBusiness } from "../business/user/loginBusiness";
import { SignupBusiness } from "../business/user/SignupBusiness";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const signupBusiness = new SignupBusiness();

      const token = await signupBusiness.signup({ name, email, password });

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
