import { Request, Response } from "express";
import { dropUser, getFeed, selectUserById } from "../data/userQueries";
import { tokenValidator } from "../services/tokenService";
import CustomError from "../errors/customError";
import { hasHeaderToken } from "../validations/validHeaderToken";
import { formatData } from "../util/transformData";
import { FeedData } from "../types/feed";

export default class UserController {
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
}
