import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@NgModule({
  declarations: [AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    QuizListComponent,
    QuizQuestionComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
