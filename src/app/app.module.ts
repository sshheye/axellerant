import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../views/header/header.component';
import { JumbotronComponent } from '../views/jumbotron/jumbotron.component';
import { LocationsComponent } from '../views/locations/locations.component';
import { TestimonialsComponent } from '../views/testimonials/testimonials.component';
import { ContactUsComponent } from '../views/contact-us/contact-us.component';
import { FooterComponent } from '../views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, JumbotronComponent, LocationsComponent,
    TestimonialsComponent, ContactUsComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
