import { NextFunction, Request, Response } from "express";
import { CreateBusiness } from "../business/post/CreateBusiness";
import { GetByIdBusiness } from "../business/post/GetByIdBusiness";
import CustomError from "../business/errors/CustomError";
import { FeedBusiness } from "../business/post/FeedBusiness";
import { LikesBusiness } from "../business/post/LikesBusiness";
import { CommentBusiness } from "../business/post/CommentBusiness";

export default class PostController {
  private feedBusiness = new FeedBusiness();
  private likesBusiness = new LikesBusiness();

  create = async (req: Request, res: Response) => {
    try {
      const { photo, description, type } = req.body;
      const token = req.headers.authorization;

      const createBusiness = new CreateBusiness();

      await createBusiness.create({ photo, description, type }, token);

      res.status(201).send({ message: "Created" });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const getByIdBusiness = new GetByIdBusiness();

      const post = await getByIdBusiness.getById(id);

      res.status(200).send({ post });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };

  feed = async (req: Request, res: Response, next: NextFunction) => {
    if (req.query.type) {
      next();
    } else {
      try {
        const token = req.headers.authorization;
        const page = req.query.page || "1";

        const feed = await this.feedBusiness.feed(page, token);

        res.status(200).send(feed);
      } catch (error) {
        const err = new CustomError(error.message, error.statusCode);
        res.status(err.statusCode).send({ message: err.message });
      }
    }
  };

  feedByType = async (req: Request, res: Response) => {
    try {
      const query = req.query.type;
      const token = req.headers.authorization;

      const feed = await this.feedBusiness.feedByType(query, token);

      res.status(200).send({ feed });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };

  like = async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;
      const token = req.headers.authorization;

      await this.likesBusiness.like(postId, token);

      res.status(200).send({ message: "Liked" });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };

  unlike = async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;
      const token = req.headers.authorization;

      await this.likesBusiness.unlike(postId, token);

      res.status(200).send({ message: "Unliked" });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };

  comment = async (req: Request, res: Response) => {
    try {
      const postId = req.params.id;
      const token = req.headers.authorization;
      const body = req.body;

      const commentBusiness = new CommentBusiness();
      await commentBusiness.comment(postId, body, token);

      res.status(200).send({ message: "Commented" });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };
}
