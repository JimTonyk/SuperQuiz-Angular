import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Answer } from '../models/answer';
import { AnswersState } from '../quiz-state-manager.service';
import { QuizService } from '../quiz.service';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: []
})
export class QuizPlayerComponent implements OnInit {

  currentQuiz : Quiz;
  currentQuestion : Question;
  currentAnswer : Answer;
  currentAnswers: AnswersState;

  isStarted = false;

  constructor(private quizService : QuizService) { 

  }

  ngOnInit() {
    // Charge le quiz que l'utilisateur a cliqué
    //Astuce : l'id du quiz viendra de l'URL
    const quizId = 32;

    this.currentQuiz= this.quizService.loadQuiz(quizId);
    this.currentQuestion = this.currentQuiz.questions[0];
    this.currentAnswer = new Answer({questionId : this.currentQuestion.id});
    this.currentAnswers = {}
  }

  //Recupère la réponse envoyée par emit et sera utilisée dans l'output dans le code HTML
  reponseRecue(answer: Answer) {
    console.log('Enregistrée')
  }

  startQuiz() {
    this.isStarted = true;
  }

}
