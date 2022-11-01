import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';

import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { RenaultComponent } from './renault/renault.component';



@NgModule({
  declarations: [
    ChevroletComponent,
    ToyotaComponent,
    RenaultComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
