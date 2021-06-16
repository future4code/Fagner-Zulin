import { Router } from "express";
import UserController from "../controllers/userController";
import { AppRoutes } from "../app";

const userRoute: Router = Router();
const userController = new UserController();

userRoute.post("/signup", userController.signup);
userRoute.post("/login", userController.login);

const handleUser: AppRoutes = {
  path: "/users",
  handle: userRoute,
};

export default handleUser;
