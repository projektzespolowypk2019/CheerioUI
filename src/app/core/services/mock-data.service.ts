import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeModel } from '../../shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  mockCategories: string[] = ['Zupy', 'Pizzy', 'Dania główne', 'Desery', 'Makarony'];
  mockRecipes: Array<RecipeModel> = [
    {
      id: 1,
      title: 'Potrawka z dzika',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      components: [
        'polędwiczki wieprzowe',
        'Esencja do duszonych mięs Knorr',
        'cebula',
        'woda',
        'ząbek czosnku',
        'Przyprawa do mięs Knorr',
        'musztarda francuska',
        'mąka pszenna'
      ]
    },
    {
      id: 2,
      title: 'Polędwiczki wieprzowe duszone z cebulą i musztardą',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      components: [
        'suche drożdże',
        'cukier',
        'letnia woda',
        'mąka uniwersalna',
        'olej roślinny',
        'sól'
      ]
    },
    {
      id: 3,
      title: 'Lahmacun - pizza turecka',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      components: [
        'suche drożdże',
        'cukier',
        'letnia woda',
        'mąka uniwersalna',
        'olej roślinny',
        'sól'
      ]
    },
    {
      id: 4,
      title: 'Domowa pizza',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      components: [
        'mąka pszenna',
        'mąka pszenna',
        'drożdże',
        'cukier',
        'oliwa z oliwek',
        'sól',
        'woda'
      ]
    },
    {
      id: 5,
      title: 'Domowa pizza 321',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      components: [
        'mąka pszenna',
        'mąka zytnia',
        'drożdże',
        'cukier',
        'oliwa z oliwek',
        'sól',
        'woda'
      ]
    }
  ];

  getRecipes(): Observable<RecipeModel[]> {
    return of(this.mockRecipes);
  }

  getCaregories(): Observable<string[]> {
    return of(this.mockCategories);
  }
}
