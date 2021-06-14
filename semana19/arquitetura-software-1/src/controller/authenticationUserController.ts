import { Request, Response } from "express";
import { signupBusiness } from "../business/signup";
import { loginBusiness } from "../business/login";

export default class AuthenticationUserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      const token = await signupBusiness({ name, email, password, role });

      res.send({ token });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await loginBusiness({ email, password });

      res.send({ token });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
