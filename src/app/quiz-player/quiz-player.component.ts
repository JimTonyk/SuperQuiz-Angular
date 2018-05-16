import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Answer } from '../models/answer';
import { AnswersState } from '../quiz-state-manager.service';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: []
})
export class QuizPlayerComponent implements OnInit {

  currentQuiz = QUIZZES[0];
  currentQuestion = QUIZZES[0].questions[0];
  currentAnswer = new Answer({ questionId: this.currentQuestion.id, multipleChoicesAllowed: false });
  currentAnswers: AnswersState = {};

  isStarted = false;

  constructor() { }

  ngOnInit() {
  }

  //Recupère la réponse envoyée par emit et sera utilisée dans l'output dans le code HTML
  reponseRecue(answer: Answer) {
    console.log('Enregistrée')
  }

  startQuiz() {
    this.isStarted = true;
  }

}
