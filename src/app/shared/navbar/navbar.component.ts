import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  hamburger: Boolean = false;

  ngOnInit() { }

  public hamburgerAnimation() {
    this.hamburger = !this.hamburger;
  }
}
