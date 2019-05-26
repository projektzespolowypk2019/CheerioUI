import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from '../../app.route';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  hamburger: Boolean = false;

  ngOnInit() { }

  public hamburgerAnimation() {
    this.hamburger = !this.hamburger;
  }

  public goToLogin() {
    this.router.navigateByUrl('/' + AppRoute.LOGIN);
  }

  public goToHome() {
    this.router.navigateByUrl('/' + AppRoute.HOME);
  }
}
