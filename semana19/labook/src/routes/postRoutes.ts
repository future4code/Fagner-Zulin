import { Router } from "express";
import PostController from "../controllers/postController";
import { AppRoutes } from "../app";

const postRoute: Router = Router();
const postController = new PostController();

postRoute.post("/create", postController.create);
postRoute.get("/feed", postController.feed, postController.feedByType);
postRoute.get("/:id", postController.getById);
postRoute.put("/:id", postController.like);
postRoute.delete("/:id", postController.unlike);
postRoute.post("/:id", postController.comment);

const handlePost: AppRoutes = {
  path: "/posts",
  handle: postRoute,
};

export default handlePost;
