import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizService } from './quiz.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QuizListComponent,
    QuizQuestionComponent,
    QuizItemComponent,
    QuizPlayerComponent,
    QuizNavComponent
  ],
  exports:[QuizPlayerComponent],
  providers: [QuizService]
})
export class QuizModule { }
