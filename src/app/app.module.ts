import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GeneralModule } from './general/general.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    GeneralModule,
    SharedModule,
    CarsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
