import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Ingredient } from './../models/ingredient';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientUrl = "/ingredients"
  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientUrl);
  }
}
