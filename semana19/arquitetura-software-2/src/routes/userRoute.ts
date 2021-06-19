import { Router } from "express";
import { login } from "../controller/user/login";
import { signup } from "../controller/user/signup";

const userRoute: Router = Router();

userRoute.post("/signup", signup);
userRoute.post("/login", login);

export default userRoute;
