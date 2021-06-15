import { Router } from "express";
import { createTask } from "../controller/task/createTask";
import { getTaskById } from "../controller/task/getTaskById";

const taskRoute: Router = Router();

taskRoute.post("/", createTask);
taskRoute.post("/:id", getTaskById);

export default taskRoute;
