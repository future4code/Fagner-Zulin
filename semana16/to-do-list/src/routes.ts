import express, { Router } from "express";
import UserController from "./controllers/userController";
import TaskController from "./controllers/taskController";

const routes: Router = express.Router();
const userController = new UserController();
const taskController = new TaskController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.put("/user", userController.createUser);
routes.get("/user", userController.searchUser);
routes.get("/user/all", userController.getAllUser);
routes.get("/user/:id", userController.getUser);
routes.post("/user/:id", userController.editUser);
routes.delete("/user/:id", userController.deleteUser);

routes.put("/task", taskController.createTask);
routes.get(
  "/task",
  taskController.getTaskByUser,
  taskController.getTaskByStatus,
  taskController.getQueryTask
);
routes.get("/task/delayed", taskController.delayedTasks);
routes.post("/task/responsible", taskController.postResponsible);
routes.post("/task/status/edit", taskController.updateStatus);
routes.get("/task/:id/responsible", taskController.getResponsibles);
routes.delete(
  "/task/:taskId/responsible/:responsibleUserId",
  taskController.withdrawResponsible
);
routes.get("/task/:id", taskController.getTask);
routes.delete("/task/:id", taskController.deleteTask);

export default routes;
