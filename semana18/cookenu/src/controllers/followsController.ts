import { hasHeaderToken } from "../validations/validHeaderToken";
import { tokenValidator } from "../services/tokenService";
import { Request, Response } from "express";
import { validFollowField } from "../validations/validFieldFollow";
import { UserFollow } from "../types/user";
import { insertFollow, deleteFollow } from "../data/userQueries";
import { validUnfollowField } from "../validations/validFieldUnfollow";

export default class FollowsController {
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
}
