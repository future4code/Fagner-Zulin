import { Request, Response } from "express";
import { generateHash, compareHash } from "../services/hashService";
import { idGenerator } from "../services/idService";
import { validSignupData } from "../validations/validFieldsSignup";
import { User } from "../types/user";
import { createUser, selectUserBy } from "../data/userQueries";
import { tokenGenerator } from "../services/tokenService";
import { hasLoginFields } from "../validations/validFieldsLogin";
import CustomError from "../errors/customError";

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

      const { id, password: hash }: User = await selectUserBy(email);

      if (!compareHash(password, hash)) {
        throw new CustomError("Incorrect password, try again", 401);
      }

      const token = tokenGenerator({ id });

      res.status(200).send({ token });
    } catch ({ code, message }) {
      res.status(code).send({ message });
    }
  };
}
