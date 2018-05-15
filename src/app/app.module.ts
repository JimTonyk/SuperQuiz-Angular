import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, HomeComponent, FooterComponent ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
