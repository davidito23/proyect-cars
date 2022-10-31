import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { ToyotaComponent } from './toyota/toyota.component';

@NgModule({
  declarations: [
    AppComponent,
    ChevroletComponent,
    ToyotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
