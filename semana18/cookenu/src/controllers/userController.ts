import { Request, Response } from "express";
import { generateHash, compareHash } from "../services/hashService";
import { idGenerator } from "../services/idService";
import { validSignupData } from "../validations/validFieldsSignup";
import { User } from "../types/user";
import {
  createUser,
  selectUserByEmail,
  selectUserById,
} from "../data/userQueries";
import { tokenGenerator, tokenValidator } from "../services/tokenService";
import { hasLoginFields } from "../validations/validFieldsLogin";
import CustomError from "../errors/customError";
import { hasHeaderToken } from "../validations/validHeaderToken";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, name, password } = validSignupData(req.body);

      const user: User = {
        id: idGenerator(),
        email,
        name,
        password: generateHash(password),
      };

      await createUser(user);

      const token = tokenGenerator({ id: user.id });

      res.status(201).json({ token });
    } catch ({ code, message }) {
      res.status(code).send({ message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = hasLoginFields(req.body);

      const { id, password: hash }: User = await selectUserByEmail(email);

      if (!compareHash(password, hash)) {
        throw new CustomError("Incorrect password, try again", 401);
      }

      const token = tokenGenerator({ id });

      res.status(200).send({ token });
    } catch ({ code, message }) {
      res.status(code).send({ message });
    }
  };

  getProfile = async (req: Request, res: Response) => {
    try {
      const token = hasHeaderToken(req.headers);
      const { id: userId } = tokenValidator(token);

      const { id, name, email } = await selectUserById(userId);

      res.send({ id, name, email });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };
}
