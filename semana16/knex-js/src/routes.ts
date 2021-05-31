import express, { Router } from "express";
import { pingController } from "./controllers/pingController";
import { actorsController } from "./controllers/actorsController";
import { moviesController } from "./controllers/moviesController";

const routes: Router = express.Router();

routes.get("/ping", pingController.ping);

routes.get("/actor", actorsController.getTotalByGender);
routes.post("/actor", actorsController.updateSalary);
routes.get("/actor/search", actorsController.getByName);
routes.get("/actor/salary", actorsController.getAverageSalaryByGender);
routes.get("/actor/:id", actorsController.getActorById);
routes.delete("/actor/:id", actorsController.deleteActor);

routes.post("/movie", moviesController.createMovie);
routes.get("/movie/all", moviesController.getAllMovies);
routes.get("/movie/search", moviesController.getSearchMovie);

export default routes;
