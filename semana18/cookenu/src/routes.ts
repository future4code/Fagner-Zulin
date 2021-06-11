import express, { Router } from "express";
import UserController from "./controllers/userController";
import RecipeController from "./controllers/recipeController";

const routes: Router = express.Router();
const userController = new UserController();
const recipeController = new RecipeController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.post("/signup", userController.signup);
routes.post("/login", userController.login);
routes.get("/user/profile", userController.getProfile);
routes.get("/user/:id", userController.getProfileById);

routes.post("/recipe", recipeController.createRecipe);

export default routes;
