import { Request, Response } from "express";
import {
  validLoginFields,
  validSignupFields,
} from "../validations/userRequestsValidations";
import { User } from "../types/user";
import { idGenerator } from "../services/idGenerator";
import { createUser, selectUserBy } from "../data/userQueries";
import { tokenGenerator } from "../services/tokenGenerator";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, password } = validSignupFields(req.body);

      const id = idGenerator();

      const newUser: User = {
        id,
        email,
        password,
      };

      await createUser(newUser);

      res.status(201).send({ token: tokenGenerator({ id }) });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = validLoginFields(req.body);

      const user = await selectUserBy(email);

      if (user.password !== password) {
        throw new Error("Invalid password");
      }

      res.status(200).send({ token: tokenGenerator({ id: user.id }) });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
