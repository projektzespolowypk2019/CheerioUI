import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeGroup: FormGroup;
  ingridientsGroup: FormGroup;
  ingredients: FormArray = this.fb.array([]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initRecipeGroup();
    this.initIngridientsGroup();
  }

  private initRecipeGroup() {
    this.recipeGroup = this.fb.group({
      title: '',
      desc: '',
      ingredients: this.ingredients,
    });
  }

  private initIngridientsGroup() {
    this.ingridientsGroup = this.fb.group({
      name: '',
      quantity: '',
      unitId: '',
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

  addIngridient() {
    this.ingredients.push(this.setIngridient());
    this.ingridientsGroup.reset();
    console.log(this.ingredients.value);
  }
}
