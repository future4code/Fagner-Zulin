import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import { consultTask, registerTask } from "../data/taskQuerys";
import { task } from "../types/taskTypes";
import { dateFormat, stringFormat } from "../utils/formatDate";
import { validCreateTaskFields } from "../validations/validField";

export default class TaskController {
  createTask = async (req: Request, res: Response) => {
    try {
      const { title, description, limitDate, creatorUserId } =
        validCreateTaskFields(req.body);

      const dataTask: task = {
        id: uuidv4(),
        title,
        description,
        limitDate: stringFormat(limitDate),
        creatorUserId,
      };

      await registerTask(dataTask);

      res.send({ message: "Created task!", data: dataTask });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getTask = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;

      const result = await consultTask(id);

      if (result) {
        const response = {
          ...result,
          limitDate: dateFormat(result.limitDate),
        };

        res.send(response);
      } else {
        res.status(404).send({ message: "Task not found" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
