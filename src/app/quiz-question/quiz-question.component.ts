import { Component, OnInit } from '@angular/core';

import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Choice } from '../models/choice';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnInit {
  // Question en cours
  question = new Question({
    id: 12,
    title: 'En quelle année AngularJS (première version) est-il sorti ?',
    choices: [
      { text: '2008' },
      { text: '2009', isCorrect: true },
      { text: '2012' },
      { text: '2014' }
    ],
    explanation: 'La version de 2009 est celle développé initialement par Miško Hevery, qui ne travaillait pas encore chez Google.'
  });
  // Réponse en cours (réponse "vierge" pour l'instant)
  answer = new Answer({
    questionId: 12,
    multipleChoicesAllowed: false,
    choices: [
      {text : '2012'}
    ]
  });

  // Si déja répondu, réponse déja soumise
  constructor() {
    this.isSubmitted = this.answer.isAnswered();
   }

  ngOnInit() {
  }

  
  
  
  isSubmitted: boolean; //Pas de clic sur soumettre
  
  clickChoice(choice: Choice) {
    // Si réponse déja soumise bloque tout
    if (this.isSubmitted){
      return;
    }
    
    if (this.answer.hasChoice(choice)) {
      this.answer.removeChoice(choice);
    }
    else {
      this.answer.addChoice(choice);
    }
    return true;
  }
  
  get submitLabel(){
    return !this.isSubmitted ? 'Soumettre' : this.answer.isCorrect ? 'Correct' : 'Incorrect'; 
  }
  
  get submitClass(){
    return !this.isSubmitted ? 'btn-primary' : this.answer.isCorrect ? 'btn-success' : 'btn-danger'; 
  }
  
  actionRepondre() {
    this.isSubmitted = true;
  }
  
  // Charge une nouvelle question et une nouvelle réponse.
  gotoNextQuestionTEMP() {
    this.question = new Question({
      'id': 35,
      'title': 'Angular est vraiment trop canon.',
      'choices': [
        { 'text': 'Vrai', 'isCorrect': true },
        { 'text': 'Faux' }
      ],
      'explanation': 'À ce stade, comment ne pas en être persuadé ? 😝'
    });
    this.answer = new Answer({
      questionId: 35,
      multipleChoicesAllowed: false
    });
  this.isSubmitted = this.answer.isAnswered();
  }

  
}
