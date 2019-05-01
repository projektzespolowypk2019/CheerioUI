import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EllipsisModule } from 'ngx-ellipsis';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    EllipsisModule,
  ]
})
export class HomeModule { }
