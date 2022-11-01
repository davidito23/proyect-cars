import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChevroletComponent } from './cars/chevrolet/chevrolet.component';
import { RenaultComponent } from './cars/renault/renault.component';
import { ToyotaComponent } from './cars/toyota/toyota.component';
import { PageGeneralComponent } from './general/page-general/page-general.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { MenuComponent } from './shared/pages/menu/menu.component';

const routes: Routes = [
 { path: '', redirectTo: 'general', pathMatch: 'full' },
 { path: 'general', component: PageGeneralComponent},
 { path: '', component: MenuComponent },
 { path: '', component: FooterComponent },
 { path: 'chevrolet', component : ChevroletComponent },
 { path: 'toyota', component : ToyotaComponent },
 { path: 'renault', component : RenaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
