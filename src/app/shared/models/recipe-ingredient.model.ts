import { IngredientModel } from './ingredient.model';
export interface RecipeIngredientModel {

  ingredientId: string;
  quantity: number;
  unitId: string;
  ingredient?: IngredientModel;
}
