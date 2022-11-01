import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGeneralComponent } from './page-general/page-general.component';

import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageGeneralComponent
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class GeneralModule { }
