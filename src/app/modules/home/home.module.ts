import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EllipsisModule } from 'ngx-ellipsis';
import { SharedModule } from '../../shared/shared.module';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';

@NgModule({
  declarations: [HomeComponent, AddRecipeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    EllipsisModule,
  ]
})
export class HomeModule { }
