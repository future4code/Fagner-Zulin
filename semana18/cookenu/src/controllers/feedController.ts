import { Request, Response } from "express";
import { hasHeaderToken } from "../validations/validHeaderToken";
import { tokenValidator } from "../services/tokenService";
import { getFeed } from "../data/userQueries";
import { FeedData } from "../types/feed";
import { formatData } from "../util/transformData";

export default class FeedController {
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
}
