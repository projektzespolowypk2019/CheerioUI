import { NgModule } from '@angular/core';
import { MockDataService } from './services/mock-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    MockDataService,
  ]
})
export class CoreModule { }
