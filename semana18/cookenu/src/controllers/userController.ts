import { Request, Response } from "express";
import { generateHash, compareHash } from "../services/hashService";
import { idGenerator } from "../services/idService";
import { validSignupData } from "../validations/validFieldsSignup";
import { User, UserFollow } from "../types/user";
import {
  insertFollow,
  insertNewUser,
  selectUserByEmail,
  selectUserById,
} from "../data/userQueries";
import { tokenGenerator, tokenValidator } from "../services/tokenService";
import { hasLoginFields } from "../validations/validFieldsLogin";
import CustomError from "../errors/customError";
import { hasHeaderToken } from "../validations/validHeaderToken";
import { validFollowField } from "../validations/validFieldFollow";

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

      await insertNewUser(user);

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

  getProfileById = async (req: Request, res: Response) => {
    try {
      const profileId = req.params.id as string;

      const token = hasHeaderToken(req.headers);
      tokenValidator(token);

      const result = await selectUserById(profileId);

      if (!result) throw new CustomError("User not found", 404);

      const { id, name, email } = result;

      res.send({ id, name, email });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };

  follow = async (req: Request, res: Response) => {
    try {
      const token = hasHeaderToken(req.headers);
      const { id: follower } = tokenValidator(token);
      const followed = await validFollowField(req.body);

      const data: UserFollow = {
        followed_id: followed,
        follower_id: follower,
      };

      await insertFollow(data);

      res.send({ message: "Followed" });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };
}
