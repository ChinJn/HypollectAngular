import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './web-page/contacts/contacts.component';
import { HomepageComponent } from './web-page/homepage/homepage.component';
import { ServiceComponent } from './web-page/service/service.component';
import { ShopComponent } from './web-page/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
