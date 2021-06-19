import express, { Router } from "express";
import UserController from "./controllers/userController";
import RecipeController from "./controllers/recipeController";
import AuthenticationUserController from "./controllers/authenticationUserController";
import FollowsController from "./controllers/followsController";
import FeedController from "./controllers/feedController";

const routes: Router = express.Router();
const userController = new UserController();
const recipeController = new RecipeController();
const authenticationUserController = new AuthenticationUserController();
const followsController = new FollowsController();
const feedController = new FeedController();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

routes.post("/signup", authenticationUserController.signup);
routes.post("/login", authenticationUserController.login);
routes.put("/reset", authenticationUserController.resetPassword);

routes.post("/user/follow", followsController.follow);
routes.post("/user/unfollow", followsController.unfollow);

routes.get("/user/feed", feedController.feed);

routes.get("/user/profile", userController.getProfile);
routes.get("/user/:id", userController.getProfileById);
routes.delete("/user/:id", userController.deleteUser);

routes.post("/recipe", recipeController.createRecipe);
routes.get("/recipe/:id", recipeController.getRecipe);
routes.put("/recipe/:id", recipeController.editRecipe);
routes.delete("/recipe/:id", recipeController.deleteRecipe);

export default routes;
