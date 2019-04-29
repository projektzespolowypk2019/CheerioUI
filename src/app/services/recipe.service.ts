import { Observable } from 'rxjs';
import { Recipe } from './../models/recipe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = "/recipes"
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }

  getRecipe(id: string): Observable<Recipe> {
    const recipeUrl = `${this.url}/${id}`
    return this.http.get<Recipe>(recipeUrl);
  }
}
