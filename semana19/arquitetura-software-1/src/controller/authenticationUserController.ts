import { Request, Response } from "express";
import * as authentication from "../business/authenticationBusiness";

export default class AuthenticationUserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      const token = await authentication.signupBusiness({
        name,
        email,
        password,
        role,
      });

      res.send({ token });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await authentication.loginBusiness({
        email,
        password,
      });

      res.send({ token });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
