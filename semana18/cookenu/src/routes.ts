import express, { Router } from "express";
import UserController from "./controllers/userController";

const routes: Router = express.Router();
const userController = new UserController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.post("/signup", userController.signup);
routes.post("/login", userController.login);
routes.get("/user/profile", userController.getProfile);
routes.get("/user/:id", userController.getProfileById);

export default routes;