import express, { Router } from "express";

const routes: Router = express.Router();

routes.get("/ping", (_, res) => {
  res.send({ message: "pong" });
});

export default routes;
