import { RecipeWithIngredientsService } from './../../core/http/recipe-with-ingredients/recipe-with-ingredients.service';
import { RecipeService } from './../../core/http/recipe/recipe.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import { RecipeModel } from '../../shared/models/recipe.model';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private recipeServiceWithIngredientsService: RecipeWithIngredientsService) { }

  recipes$: Observable<RecipeModel[]>;
  categories$: Observable<string[]>;
  tmp: boolean;

  ngOnInit() {
    this.recipes$ = from(this.recipeServiceWithIngredientsService.findAll());
  }

  ngAfterViewInit() {
    AOS.init({
      delay: 500,
      duration: 1000,
      easing: 'ease-out',
      mirror: true
    });
  }
}
