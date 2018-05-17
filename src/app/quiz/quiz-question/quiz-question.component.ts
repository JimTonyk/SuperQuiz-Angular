import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { Choice } from '../../models/choice';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnInit {
  // Question en cours
  @Input() question: Question;
  // Réponse en cours (réponse "vierge" pour l'instant)
  @Input() answer: Answer;
  @Output() submit = new EventEmitter<Answer>();

  // Si déja répondu, réponse déja soumise
  constructor() {
  }
  
  ngOnInit() {

  }

  
  // Mieux vaut redéfinir les variables à l'initialisation que dans le constructeur (risque d'error undefined si passage par le constructeur)
  ngOnChanges() {
    this.isSubmitted = this.answer.isAnswered();
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
    this.submit.emit(this.answer);
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
