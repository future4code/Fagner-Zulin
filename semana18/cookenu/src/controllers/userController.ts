import { Request, Response, text } from "express";
import { generateHash, compareHash } from "../services/hashService";
import { idGenerator } from "../services/idService";
import { validSignupData } from "../validations/validFieldsSignup";
import { User, UserFollow } from "../types/user";
import {
  deleteFollow,
  dropUser,
  getFeed,
  insertFollow,
  insertNewUser,
  selectUserByEmail,
  selectUserById,
  updatePassword,
} from "../data/userQueries";
import { tokenGenerator, tokenValidator } from "../services/tokenService";
import { hasLoginFields } from "../validations/validFieldsLogin";
import CustomError from "../errors/customError";
import { hasHeaderToken } from "../validations/validHeaderToken";
import { validFollowField } from "../validations/validFieldFollow";
import { validUnfollowField } from "../validations/validFieldUnfollow";
import { formatData } from "../util/transformData";
import { FeedData } from "../types/feed";
import { validResetData } from "../validations/validFieldResetPassword";
import { generatePassword } from "../services/passwordService";
import transport from "../services/emailService";

export default class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { email, name, password, role } = validSignupData(req.body);

      const user: User = {
        id: idGenerator(),
        email,
        name,
        password: generateHash(password),
        role,
      };

      await insertNewUser(user);

      const token = tokenGenerator({ id: user.id, role: user.role });

      res.status(201).json({ token });
    } catch ({ code, message }) {
      res.status(code).send({ message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = hasLoginFields(req.body);

      const user = await selectUserByEmail(email);

      if (!user) throw new CustomError("Unregistered user");

      const { id, password: hash, role }: User = user;

      if (!compareHash(password, hash)) {
        throw new CustomError("Incorrect password, try again", 401);
      }

      const token = tokenGenerator({ id, role });

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

  unfollow = async (req: Request, res: Response) => {
    try {
      const token = hasHeaderToken(req.headers);
      const { id: follower } = tokenValidator(token);
      const followed = await validUnfollowField(req.body);

      const data: UserFollow = {
        followed_id: followed,
        follower_id: follower,
      };

      await deleteFollow(data);

      res.send({ message: "Unfollowed" });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };

  feed = async (req: Request, res: Response) => {
    try {
      const token = hasHeaderToken(req.headers);
      const { id } = tokenValidator(token);

      const result = await getFeed(id);

      const response = result.map((dataFeed: FeedData) => {
        return {
          id: dataFeed.id,
          title: dataFeed.title,
          description: dataFeed.description,
          createdAt: formatData(dataFeed.creation_date),
          userId: dataFeed.creator_id,
          userName: dataFeed.name,
        };
      });

      res.send({ feed: response });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id as string;
      const token = hasHeaderToken(req.headers);
      const { role } = tokenValidator(token);

      if (role !== "ADMIN") {
        throw new CustomError(
          "You are not allowed to finish this operation.",
          401
        );
      }

      await dropUser(userId);

      res.send();
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };

  resetPassword = async (req: Request, res: Response) => {
    try {
      const email = await validResetData(req.body);
      const password = generatePassword();
      const hash = generateHash(password);
      await updatePassword(email, hash);

      transport.sendMail({
        from: "contact@cookenu.com",
        to: [email],
        subject: "Reset Password",
        text: `This is your new password: ${password}`,
      });

      res.send({ message: "Your new password will be sent to your email" });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };
}
