import { Request, Response } from "express";
import { tokenValidator } from "../services/tokenService";
import { hasHeaderToken } from "../validations/validHeaderToken";
import { hasRecipeFields } from "../validations/validFieldsCreateRecipe";
import { Recipe } from "../types/recipe";
import { idGenerator } from "../services/idService";
import {
  insertNewRecipe,
  selectRecipeById,
  updateRecipe,
} from "../data/recipeQueries";
import CustomError from "../errors/customError";
import { formatData } from "../util/transformData";

export default class RecipeController {
  createRecipe = async (req: Request, res: Response) => {
    try {
      const token = hasHeaderToken(req.headers);
      const { id } = tokenValidator(token);

      const { title, description } = hasRecipeFields(req.body);

      const newRecipe: Recipe = {
        id: idGenerator(),
        title,
        description,
        creator_id: id,
      };

      await insertNewRecipe(newRecipe);

      res.send({ message: "Recipe created" });
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };

  getRecipe = async (req: Request, res: Response) => {
    try {
      const recipeId = req.params.id as string;

      const token = hasHeaderToken(req.headers);
      tokenValidator(token);

      const result = await selectRecipeById(recipeId);

      if (!result) throw new CustomError("Recipe not found", 404);

      const response = {
        id: result.id,
        title: result.title,
        description: result.description,
        createdAt: formatData(result.creation_date),
      };

      res.send(response);
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };

  editRecipe = async (req: Request, res: Response) => {
    try {
      const recipeId = req.params.id as string;

      const token = hasHeaderToken(req.headers);
      const { id, role } = tokenValidator(token);

      const recipe = await selectRecipeById(recipeId);

      if (role === "NORMAL" && recipe.creator_id !== id) {
        throw new CustomError(
          "You are not allowed to finish this operation.",
          401
        );
      }

      await updateRecipe(recipeId, req.body);

      res.end();
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };
}
