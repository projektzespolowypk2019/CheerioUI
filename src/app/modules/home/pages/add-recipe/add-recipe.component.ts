import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

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
  quantityRegExp: RegExp = /(\d+(\.\d+)?)/;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initRecipeGroup();
    this.initIngridientsGroup();
  }

  private initRecipeGroup() {
    this.recipeGroup = this.fb.group({
      title: ['', [Validators.required, Validators.max(100)]],
      desc: ['', [Validators.required]],
      ingredients: [this.ingredients, [Validators.required]],
    });
  }

  private initIngridientsGroup() {
    this.ingridientsGroup = this.fb.group({
      name: ['', [Validators.required, Validators.max(100)]],
      quantity: [ , [Validators.required, Validators.pattern(this.quantityRegExp)]],
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
