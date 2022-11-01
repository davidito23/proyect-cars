import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';

import {BreadcrumbModule} from 'primeng/breadcrumb';




@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    
    
  ],
  exports : [MenuComponent, FooterComponent]
  
})
export class SharedModule { }
