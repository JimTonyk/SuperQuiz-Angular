import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { QuizModule } from './quiz/quiz.module';

@NgModule({
  declarations: [AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    QuizModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
