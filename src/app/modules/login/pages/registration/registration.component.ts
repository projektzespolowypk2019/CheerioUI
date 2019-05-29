import { RegisterRequestModel } from './../../../../shared/models/register-request.model';
import { UserService } from './../../../../core/http/user/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  constructor(private router: Router, private fb: FormBuilder,
    private userService: UserService) { }
  registerGroup: FormGroup;
  ngOnInit() {
    this.registerInit();
  }
  private registerInit() {
    this.registerGroup = this.fb.group({
      login: "",
      password: "",
      repeatPassword: "",
      email: ""
    });
  }
  public goToLogin() {
    this.router.navigateByUrl('/login');
  }

  public async register() {
    if (this.registerGroup.get('password').value !== this.registerGroup.get('repeatPassword').value) {
      alert("Passwords do not match");
      return;
    }
    const registerModel = {
      nickname: this.registerGroup.get('login').value,
      email: this.registerGroup.get('email').value,
      password: this.registerGroup.get('password').value
    };

    const response = await this.userService.register(registerModel);
    console.log(response);
  }
}
