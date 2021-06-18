import { Router } from "express";
import UserController from "../controllers/userController";
import { AppRoutes } from "../app";

const userRoute: Router = Router();
const userController = new UserController();

userRoute.post("/signup", userController.signup);
userRoute.post("/login", userController.login);
userRoute.post("/:id", userController.makeFriendship);
userRoute.delete("/:id", userController.undoFriendship);

const handleUser: AppRoutes = {
  path: "/users",
  handle: userRoute,
};

export default handleUser;
