import { Response, Request, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  assignResponsible,
  changeTaskStatus,
  consultDelayedTask,
  consultResponsibleTask,
  consultTask,
  consultTaskBy,
  consultTaskByCreatorId,
  deleteTaskBy,
  queryTask,
  registerTask,
  removeResponsible,
  responsibleTask,
} from "../data/taskQuerys";
import {
  responsibleUserTask,
  task,
  taskStatusRequest,
} from "../types/taskTypes";
import { dateFormat, stringFormat } from "../utils/formatDate";
import {
  validCreateTaskFields,
  validPostResponsibleFields,
  validUpdateStatusField,
} from "../validations/validField";
import { validQueryString } from "../validations/validQuerys";
import { hasTask, isResponsible, hasTasks } from "../validations/validEntity";

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

      const taskData = await consultTask(id);
      const responsibles = await consultResponsibleTask(id);

      if (taskData) {
        const response = {
          ...taskData,
          limitDate: dateFormat(taskData.limitDate),
          responsibleUsers: responsibles,
        };

        res.send(response);
      } else {
        res.status(404).send({ message: "Task not found" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getTaskByUser = async (req: Request, res: Response, next: NextFunction) => {
    if (req.query.status || req.query.query) {
      next();
    } else {
      try {
        const creatorId = validQueryString(
          req.query.creatorUserId,
          "creatorUserId"
        );

        const result: any[] = await consultTaskByCreatorId(creatorId);

        const response = result.map((item) => {
          return {
            ...item,
            limitDate: dateFormat(item.limitDate),
          };
        });

        res.send({ tasks: response });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    }
  };

  postResponsible = async (req: Request, res: Response) => {
    try {
      const data: responsibleUserTask = validPostResponsibleFields(req.body);

      await assignResponsible(data);

      res.send({ message: "Responsibles registered successfully" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getResponsibles = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      const result = await consultResponsibleTask(id);

      if (result.length) {
        res.send({ users: result });
      } else {
        res.status(404).send({ message: "Task not found" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  updateStatus = async (req: Request, res: Response) => {
    try {
      const data: taskStatusRequest = validUpdateStatusField(req.body);

      await hasTasks(data.taskIds);

      await changeTaskStatus(data);

      res.send({ message: "Updated all status" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getTaskByStatus = async (req: Request, res: Response, next: NextFunction) => {
    if (req.query.query) {
      next();
    } else {
      try {
        const status = validQueryString(req.query.status, "status");

        const result: any[] = await consultTaskBy(status);

        const response = result.map((item) => {
          return {
            ...item,
            limitDate: dateFormat(item.limitDate),
          };
        });

        res.send({ tasks: response });
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    }
  };

  delayedTasks = async (_: Request, res: Response) => {
    try {
      const result: any[] = await consultDelayedTask();

      const response = result.map((item) => {
        return {
          ...item,
          limitDate: dateFormat(item.limitDate),
        };
      });

      res.send({ tasks: response });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  withdrawResponsible = async (req: Request, res: Response) => {
    try {
      const { taskId, responsibleUserId } = req.params;

      await hasTask(taskId);
      await isResponsible(taskId, responsibleUserId);

      await removeResponsible(taskId, responsibleUserId);

      res.send({ message: "Removed responsible" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getQueryTask = async (req: Request, res: Response) => {
    try {
      const query = validQueryString(req.query.query, "query");

      const result: any[] = await queryTask(query);

      const response = result.map((item) => {
        return {
          ...item,
          limitDate: dateFormat(item.limitDate),
        };
      });

      res.send({ tasks: response });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  deleteTask = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;
      await deleteTaskBy(id);

      res.send({ message: "Deleted task" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
