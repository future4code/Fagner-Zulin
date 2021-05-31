import express, { Router } from "express";
import UserController from "./controllers/userController";

const routes: Router = express.Router();
const userController = new UserController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.get(
  "/user/all",
  userController.getAllUsers,
  userController.orderUsers,
  userController.userPerPage
);
routes.get("/user", userController.filterUserByName);
routes.get("/user/:type", userController.filterUserByType);
routes.get("/users", userController.getUsers);

export default routes;
