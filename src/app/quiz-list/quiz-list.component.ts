import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: []
})
export class QuizListComponent implements OnInit {

  quizList = QUIZZES;
  
  constructor() { }

  ngOnInit() {
  }

  addQuizz(){
    this.quizList.push(new Quiz({title: 'Dummy Quiz', description: 'Le développeur qui a écrit ça est un génie !'}));
  }

  deleteQuizz(){
    this.quizList.splice(this.quizList.length-1, 1);
    if(this.quizList.length === 0){
      alert("Aucun quiz disponible");
    }
  }

}
