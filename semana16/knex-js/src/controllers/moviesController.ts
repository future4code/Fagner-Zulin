import { Request, Response } from "express";
import { allMovies, createMovie, searchMovie } from "../database/moviesQuerys";

export const moviesController = {
  createMovie: async (req: Request, res: Response) => {
    try {
      const { id, name, blurb, releaseDate, rating } = req.body;

      await createMovie(id, name, blurb, releaseDate, rating);

      res.status(201).send({ message: "Created movie" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  getAllMovies: async (req: Request, res: Response) => {
    try {
      const result = await allMovies();

      res.send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  getSearchMovie: async (req: Request, res: Response) => {
    try {
      const query = req.query.query as string;

      const result: any[] = await searchMovie(query);

      if (!result.length) {
        res.status(404).send({ message: "Nothing found" });
      } else {
        res.send(result);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};
