import { NgModule } from '@angular/core';
import { MockDataService } from './services/mock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import {IngredientService} from "./http/ingredient/ingredient.service";
import {RecipeService} from "./http/recipe/recipe.service";
import {UnitService} from "./http/unit/unit.service";
import {UserService} from "./http/user/user.service";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    MockDataService,
    IngredientService,
    RecipeService,
    UnitService,
    UserService
  ]
})
export class CoreModule { }
