export interface Recipe {
  id: string;
  title: string;
  description: string;
  creator_id: string;
}

export interface RecipeEdit {
  title?: string;
  description?: string;
}
