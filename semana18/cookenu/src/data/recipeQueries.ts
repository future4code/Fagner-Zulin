import { Recipe, RecipeEdit } from "../types/recipe";
import CustomError from "../errors/customError";
import knexConnection from "./connection";

export const insertNewRecipe = async (data: Recipe): Promise<void> => {
  try {
    await knexConnection("cookenu_recipes").insert(data);
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const selectRecipeById = async (id: string): Promise<any> => {
  try {
    const [result] = await knexConnection("cookenu_recipes")
      .select()
      .where({ id });

    return result;
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};

export const updateRecipe = async (
  id: string,
  data: RecipeEdit
): Promise<void> => {
  try {
    await knexConnection("cookenu_recipes").update(data).where({ id });
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};
