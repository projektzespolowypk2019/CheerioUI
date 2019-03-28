import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [LoginRoutingModule]
})
export class LoginModule {}
