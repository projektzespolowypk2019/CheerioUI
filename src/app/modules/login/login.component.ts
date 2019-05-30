import { UserService } from './../../core/http/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './styles/common-styles.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder,
    private userService: UserService) { }

  public loginGroup: FormGroup;
  ngOnInit() {
    this.loginInit();
  }

  private loginInit() {
    this.loginGroup = this.fb.group({
      login: "",
      password: ""
    });
  }

  public goToRegistration() {
    this.router.navigateByUrl(this.router.url + '/registration');
  }


  public async login() {
    try {
      const response = await this.userService.login(this.loginGroup.get("login").value, this.loginGroup.get("password").value)
        .toPromise();
      window.localStorage.setItem("token", JSON.stringify(response));
      this.router.navigateByUrl('/home');
    }
    catch{
      alert("Login failed!");
    }
  }

}
