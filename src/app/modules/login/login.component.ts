import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './styles/common-styles.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  public goToRegistration() {
    this.router.navigateByUrl(this.router.url + '/registration');
  }
}
