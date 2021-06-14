import express, { Router } from "express";
import AuthenticationUserController from "./controller/authenticationUserController";
import UserController from "./controller/userController";

const routes: Router = express.Router();
const authenticationUserController = new AuthenticationUserController();
const userController = new UserController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.post("/signup", authenticationUserController.signup);
routes.post("/login", authenticationUserController.login);

routes.get("/all", userController.getAll);
routes.delete("/:id", userController.deleteUser);

export default routes;
