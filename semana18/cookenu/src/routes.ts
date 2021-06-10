import express, { Router } from "express";
import UserController from "./controllers/userController";

const routes: Router = express.Router();
const userController = new UserController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.post("/signup", userController.signup);

export default routes;
