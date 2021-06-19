import CustomError from "../errors/customError";

interface RecipeData {
  title: string;
  description: string;
}

export const hasRecipeFields = ({
  title,
  description,
}: RecipeData): RecipeData => {
  if (!title || !description) {
    throw new CustomError(
      "Some field is missing. Title and description is required"
    );
  }

  return { title, description };
};
