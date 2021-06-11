import { Request, Response } from "express";
import { tokenValidator } from "../services/tokenService";
import { hasHeaderToken } from "../validations/validHeaderToken";
import { hasRecipeFields } from "../validations/validFieldsCreateRecipe";
import { Recipe } from "../types/recipe";
import { idGenerator } from "../services/idService";
import { insertNewRecipe } from "../data/recipeQueries";

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
}
