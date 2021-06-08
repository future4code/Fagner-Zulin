import { Request, Response } from "express";
import {
  createUser,
  selectUserByEmail,
  selectUserById,
} from "../data/userQueries";
import { compareHash, generateHash } from "../services/hashService";
import { idGenerator } from "../services/idService";
import { tokenGenerator, tokenValidator } from "../services/tokenService";
import { TokenData } from "../types/token";
import { User } from "../types/user";
import {
  validHeaderToken,
  validLoginFields,
  validSignupFields,
} from "../validations/userRequestsValidations";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, password, role } = validSignupFields(req.body);

      const id = idGenerator();

      const newUser: User = {
        id,
        email,
        password: generateHash(password),
        role,
      };

      await createUser(newUser);

      res.status(201).send({ token: tokenGenerator({ id, role }) });
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

      res
        .status(200)
        .send({ token: tokenGenerator({ id: user.id, role: user.role }) });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  profile = async (req: Request, res: Response) => {
    req.statusCode = 400;
    try {
      const token = validHeaderToken(req.headers.authorization);

      const data: TokenData = tokenValidator(token);

      if (data.role !== "NORMAL") {
        res.statusCode = 403;
        throw new Error("Only a NORMAL user can access this funcionality");
      }

      const { id, email, role } = await selectUserById(data.id);

      res.status(200).send({ id, email, role });
    } catch (error) {
      res.send({ message: error.message });
    }
  };
}
