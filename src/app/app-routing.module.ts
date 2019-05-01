import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from './app.route';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoute.HOME
  },
  {
    path: AppRoute.HOME,
    loadChildren: 'src/app/modules/home/home.module#HomeModule'
  },
  {
    path: AppRoute.LOGIN,
    loadChildren: 'src/app/modules/login/login.module#LoginModule'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
