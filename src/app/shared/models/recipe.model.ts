import {RecipeIngredientModel} from "./recipe-ingredient.model";

export interface RecipeModel {
  id?: string;
  name: string;
  author: string;
  description: string;
  recipeIngredientSet: Array<RecipeIngredientModel>
}
