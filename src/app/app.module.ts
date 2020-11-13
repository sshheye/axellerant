import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../views/header/header.component';
import { JumbotronComponent } from '../views/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
