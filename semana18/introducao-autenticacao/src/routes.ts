import express, { Router } from "express";
import UserController from "./controllers/userController";

const routes: Router = express.Router();
const userController = new UserController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.post("/user/signup", userController.signup);
routes.post("/user/login", userController.login);

export default routes;
