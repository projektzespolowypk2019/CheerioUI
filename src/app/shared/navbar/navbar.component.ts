import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from '../../app.route';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  hamburger: Boolean = false;

  ngOnInit() {}

  private hamburgerAnimation() {
    this.hamburger = !this.hamburger;
  }

  private goToLogin() {
    this.router.navigateByUrl('/' + AppRoute.LOGIN);
  }

  private goToHome() {
    this.router.navigateByUrl('/' + AppRoute.HOME);
  }
}
