import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ErrorService } from './sevices/errors/error.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeGroup: FormGroup;
  ingridientsGroup: FormGroup;
  ingredients: FormArray = this.fb.array([]);
  desc: string;
  title: string;
  realNumbersRegExp: RegExp = /(\d+(\.\d+)?)/;

  constructor(private fb: FormBuilder,
    public errorService: ErrorService) { }

  ngOnInit() {
    this.initRecipeGroup();
    this.initIngridientsGroup();
  }

  private initRecipeGroup() {
    this.recipeGroup = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      desc: ['', [Validators.required]],
      ingredients: [this.ingredients, [Validators.required]],
    });
  }

  private initIngridientsGroup() {
    this.ingridientsGroup = this.fb.group({
      name: ['', [Validators.required, Validators.max(50)]],
      quantity: [, [Validators.required, Validators.pattern(this.realNumbersRegExp)]],
      unitId: ['', [Validators.required]],
    });
  }

  private setIngridient() {
    const name = this.ingridientsGroup.controls['name'].value;
    const quantity = this.ingridientsGroup.controls['quantity'].value;
    const unitId = this.ingridientsGroup.controls['unitId'].value;
    return new FormControl({
      name: name,
      quantity: quantity,
      unitId: unitId
    });
  }

  addIngridientToArray() {
    if (this.ingridientsGroup.valid) {
      this.ingredients.push(this.setIngridient());
      this.ingridientsGroup.reset();
      this.errorService.clearErrors(this.errorService.errorsIngredientForm);
    } else {
      this.errorService.controlValueChangedIngredient(this.ingridientsGroup);
    }
  }

  removeIngridientFromArray(element: HTMLElement) {
    if (element.className === 'fas fa-times-circle') {
      this.ingredients.removeAt(parseInt(element.dataset.index, 10));
    }
  }

  renderView() {
    this.title = this.recipeGroup.get('title').value;
    this.desc = this.recipeGroup.get('desc').value;
  }
}
