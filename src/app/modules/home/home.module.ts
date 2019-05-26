import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EllipsisModule } from 'ngx-ellipsis';
import { SharedModule } from '../../shared/shared.module';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { ErrorService } from './pages/add-recipe/sevices/errors/error.service';

@NgModule({
  declarations: [HomeComponent, AddRecipeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    EllipsisModule,
  ],
  providers: [
    ErrorService,
  ]
})
export class HomeModule { }
