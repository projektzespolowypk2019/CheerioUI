import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorsRecipeForm = {
    title: '',
    desc: '',
    ingredients: '',
  };

  errorsIngredientForm = {
    name: '',
    quantity: '',
    unitId: '',
  };

  recipeValidationMessage = {
    title: {
      required: 'Title is required.',
      maxLength: 'Title must have a maximum of 100 characters.',
    },
    desc: {
      required: 'Description is required.',
    },
    ingredients: 'Ingredients are required.',
  };

  ingredientValidationMessage = {
    name: {
      required: 'Name is required.',
      maxLenght: 'Name must have a maximum of 50 characters.',
    },
    quantity: {
      required: 'Quantity is required.',
      realNumbers: 'Quantity must have only real numbers.',
    },
    unitId: {
      required: 'Unit measure is required.',
    }
  };

  constructor() { }

  clearErrors(errors: Object) {
    Object.keys(errors).forEach(field => {
      errors[field] = '';
    });
  }

  controlValueChangedRecipe(recipeForm: FormGroup) {
    this.clearErrors(this.errorsRecipeForm);
    Object.keys(this.errorsRecipeForm).forEach(field => {
      const control = recipeForm.get(field);
      if (control && control.dirty && control.invalid) {
        const messageInvalidControl = this.recipeValidationMessage[field];
        Object.keys(messageInvalidControl).forEach(key => {
          this.errorsRecipeForm[field] += messageInvalidControl[key] + ' ';
        });
      }
    });
  }

  controlValueChangedIngredient(ingredientForm: FormGroup) {
    this.clearErrors(this.errorsIngredientForm);
    Object.keys(this.errorsIngredientForm).forEach(field => {
      const control = ingredientForm.get(field);
      if (control && control.invalid) {
        const messageInvalidControl = this.ingredientValidationMessage[field];
        Object.keys(messageInvalidControl).forEach(key => {
          this.errorsIngredientForm[field] += messageInvalidControl[key] + ' ';
        });
      }
    });
  }
}
