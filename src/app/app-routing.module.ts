import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGeneralComponent } from './general/page-general/page-general.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { MenuComponent } from './shared/pages/menu/menu.component';

const routes: Routes = [
 { path: '', component: PageGeneralComponent},
 { path: '', component: MenuComponent },
 { path: '', component: FooterComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
