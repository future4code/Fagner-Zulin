import { Request, Response } from "express";
import { CreateBusiness } from "../business/post/CreateBusiness";
import { GetByIdBusiness } from "../business/post/GetByIdBusiness";
import CustomError from "../business/errors/CustomError";
import { FeedBusiness } from "../business/post/FeedBusiness";

export default class PostController {
  private feedBusiness = new FeedBusiness();

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

  feed = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization;

      const feed = await this.feedBusiness.feed(token);

      res.status(200).send({ feed });
    } catch (error) {
      const err = new CustomError(error.message, error.statusCode);
      res.status(err.statusCode).send({ message: err.message });
    }
  };
}
