import { Request, Response } from "express";
import { tokenValidator } from "../services/tokenService";
import { hasHeaderToken } from "../validations/validHeaderToken";
import { hasRecipeFields } from "../validations/validFieldsCreateRecipe";
import { Recipe } from "../types/recipe";
import { idGenerator } from "../services/idService";
import {
  dropRecipe,
  hasRecipeAndGet,
  insertNewRecipe,
  updateRecipe,
} from "../data/recipeQueries";
import { formatData } from "../util/transformData";
import { validNormalAndCreator } from "../validations/validRulesRecipeChanges";

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

      const result = await hasRecipeAndGet(recipeId);

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

      const recipe = await hasRecipeAndGet(recipeId);

      validNormalAndCreator(role, recipe.creator_id, id);

      await updateRecipe(recipeId, req.body);

      res.end();
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };

  deleteRecipe = async (req: Request, res: Response) => {
    try {
      const recipeId = req.params.id as string;

      const token = hasHeaderToken(req.headers);
      const { id, role } = tokenValidator(token);

      const recipe = await hasRecipeAndGet(recipeId);

      validNormalAndCreator(role, recipe.creator_id, id);

      await dropRecipe(recipeId);

      res.end();
    } catch ({ code, message }) {
      res.status(code ? code : 400).send({ message });
    }
  };
}
