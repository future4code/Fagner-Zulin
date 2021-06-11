import { Request, Response } from "express";
import {
  validHeaderToken,
  validLoginFields,
  validSignupFields,
} from "../validations/userRequestsValidations";
import { User } from "../types/user";
import { idGenerator } from "../services/idGenerator";
import {
  createUser,
  selectUserByEmail,
  selectUserById,
} from "../data/userQueries";
import { tokenGenerator } from "../services/tokenGenerator";
import { tokenValidator } from "../services/tokenValidator";
import { encryptPassword } from "../services/encryptPassword";
import { decryptPassword } from "../services/decryptPassword";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, password } = validSignupFields(req.body);

      const id = idGenerator();

      const newUser: User = {
        id,
        email,
        password: encryptPassword(password),
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

      const user = await selectUserByEmail(email);

      if (!decryptPassword(password, user.password)) {
        throw new Error("Invalid password");
      }

      res.status(200).send({ token: tokenGenerator({ id: user.id }) });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  profile = async (req: Request, res: Response) => {
    try {
      const token = validHeaderToken(req.headers.authorization);

      const userId = tokenValidator(token);

      const { id, email } = await selectUserById(userId);

      res.status(200).send({ id, email });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
