import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { IngredientService } from './http/ingredient/ingredient.service';
import { RecipeService } from './http/recipe/recipe.service';
import { UnitService } from './http/unit/unit.service';
import { UserService } from './http/user/user.service';
import { HeadersService } from './http/headers/headers.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    IngredientService,
    RecipeService,
    UnitService,
    UserService,
    HeadersService
  ]
})
export class CoreModule { }
