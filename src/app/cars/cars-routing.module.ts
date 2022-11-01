import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { RenaultComponent } from './renault/renault.component';
import { ToyotaComponent } from './toyota/toyota.component';

const routes: Routes =  [{
  path: '',
  component: AppComponent,
  children: [
      { path: 'chevrolet', component: ChevroletComponent },
      { path: 'toyota', component: ToyotaComponent },
      { path: 'renault', component: RenaultComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
