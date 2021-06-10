import { Request, Response } from "express";
import { generateHash } from "../services/hashService";
import { idGenerator } from "../services/idService";
import { validSignupData } from "../validations/validFieldsSignup";
import { User } from "../types/user";
import { createUser } from "../data/userQueries";
import { tokenGenerator } from "../services/tokenService";

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
}
