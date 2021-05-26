import { Request, Response } from "express";
import {
  averageSalaryByGender,
  deleteActorById,
  actorByName,
  totalActorsByGender,
  updateSalaryById,
  actorById,
} from "../database/actorsQuerys";

export const actorsController = {
  getByName: async (req: Request, res: Response) => {
    try {
      const name = req.query.name as string;

      const [result]: Array<any> = await actorByName(name);

      if (!result) {
        res.status(404).send({ message: "Actor not found" });
      } else {
        res.send({ result: result });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  getTotalByGender: async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender as string;
      validGender(gender);

      const [result]: Array<any> = await totalActorsByGender(gender);

      res.send(result);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  updateSalary: async (req: Request, res: Response) => {
    try {
      const { id, salary } = req.body;

      if (!salary || !id) throw new Error("Salary and Id must be informed");

      const result = await updateSalaryById(id, salary);

      if (result) {
        res.send({ message: "Updated salary" });
      } else {
        res.status(404).send({ message: "Actor not found" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  deleteActor: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const result = await deleteActorById(id);

      if (result) {
        res.send({ message: "Deleted actor" });
      } else {
        res.status(404).send({ message: "Actor not found" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  getAverageSalaryByGender: async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender as string;

      const result = await averageSalaryByGender(gender);

      res.send(result);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  getActorById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await actorById(id);

      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: "Actor not found" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

function validGender(gender: string) {
  const genders = ["female", "male"];
  if (!genders.includes(gender)) {
    throw new Error("Invalid gender. The valid entry is 'female' or 'male'");
  }
}
