import { Request, Response } from "express";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";
import { task } from "../../model/task";

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task: task = await getTaskByIdBusiness(id);

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
