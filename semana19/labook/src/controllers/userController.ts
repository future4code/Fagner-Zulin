import { Request, Response } from "express";
import CustomError from "../business/errors/CustomError";
import { LoginBusiness } from "../business/user/LoginBusiness";
import { SignupBusiness } from "../business/user/SignupBusiness";
import { MakeFriendshipBusiness } from "../business/user/MakeFriendshipBusiness";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const signupBusiness = new SignupBusiness();

      const token = await signupBusiness.signup({ name, email, password });

      res.send({ token });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const loginBusiness = new LoginBusiness();

      const token = await loginBusiness.login({ email, password });

      res.status(200).send({ token });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };

  makeFriendship = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const token = req.headers.authorization;

      const makeFriendshipBusiness = new MakeFriendshipBusiness();

      await makeFriendshipBusiness.makeFriendship(id, token);

      res.status(200).send({ message: "Friendship made successfully" });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };
}
