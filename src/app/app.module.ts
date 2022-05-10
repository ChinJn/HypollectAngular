import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './web-components/header/header.component';
import { FooterComponent } from './web-components/footer/footer.component';
import { HomepageComponent } from './web-page/homepage/homepage.component';
import { ServiceComponent } from './web-page/service/service.component';
import { ShopComponent } from './web-page/shop/shop.component';
import { ContactsComponent } from './web-page/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ServiceComponent,
    ShopComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
