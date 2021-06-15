import { Router } from "express";
import UserController from "../controllers/userController";

const userRoute: Router = Router();
const userController = new UserController();

userRoute.post("/signup", userController.signup);

export default userRoute;
