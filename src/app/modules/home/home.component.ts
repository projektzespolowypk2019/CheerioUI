import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import { RecipeModel } from '../../shared/models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() { }

  recipes$: Observable<RecipeModel[]>;
  categories$: Observable<string[]>;
  tmp: boolean;

  ngOnInit() {}

  ngAfterViewInit() {
    AOS.init({
      delay: 500,
      duration: 1000,
      easing: 'ease-out',
      mirror: true
    });
  }
}
