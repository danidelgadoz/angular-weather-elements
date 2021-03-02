import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
