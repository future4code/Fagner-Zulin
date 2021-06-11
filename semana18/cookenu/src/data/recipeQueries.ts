import { Recipe } from "../types/recipe";
import CustomError from "../errors/customError";
import knexConnection from "./connection";

export const insertNewRecipe = async (data: Recipe): Promise<void> => {
  try {
    await knexConnection("cookenu_recipes").insert(data);
  } catch (error) {
    throw new CustomError(error.sqlMessage, 500);
  }
};
