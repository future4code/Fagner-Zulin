import express, { Router } from "express";
import AuthenticationUserController from "./controller/authenticationUserController";

const routes: Router = express.Router();
const authenticationUserController = new AuthenticationUserController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.post("/signup", authenticationUserController.signup);
routes.post("/login", authenticationUserController.login);

export default routes;
