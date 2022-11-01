import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GeneralModule } from './general/general.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { ChevroletComponent } from './cars/chevrolet/chevrolet.component'; 
import { ToyotaComponent } from './cars/toyota/toyota.component'; 
import { RenaultComponent } from './cars/renault/renault.component';

@NgModule({
  declarations: [
    AppComponent,
    ChevroletComponent,
    ToyotaComponent,
    RenaultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    GeneralModule,
    SharedModule,
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
