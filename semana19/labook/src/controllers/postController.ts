import { Request, Response } from "express";
import { getByIdBusiness } from "../business/post/getByIdBusiness";

export default class PostController {
  create = async (req: Request, res: Response) => {
    try {
      const { photo, description, type } = req.body;
      const token: string = req.headers.authorization as string;

      res.status(201).send({ message: "Created" });
    } catch (error) {
      res.send({ message: error.message }).status(400);
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const post = await getByIdBusiness(id);

      res.status(200).send({ post });
    } catch (error) {
      res.send({ message: error.message }).status(400);
    }
  };
}
