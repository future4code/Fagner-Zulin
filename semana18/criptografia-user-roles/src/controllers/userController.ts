import { Request, Response } from "express";
import {
  createUser,
  selectUserByEmail,
  selectUserById,
} from "../data/userQueries";
import { compareHash, generateHash } from "../services/hashService";
import { idGenerator } from "../services/idService";
import { tokenGenerator, tokenValidator } from "../services/tokenService";
import { User } from "../types/user";
import {
  validHeaderToken,
  validLoginFields,
  validSignupFields,
} from "../validations/userRequestsValidations";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, password } = validSignupFields(req.body);

      const id = idGenerator();

      const newUser: User = {
        id,
        email,
        password: generateHash(password),
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

      if (!compareHash(password, user.password)) {
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
