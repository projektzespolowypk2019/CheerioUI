import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [
    '../../styles/common-styles.scss',
    './registration.component.scss'
  ]
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  public goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
