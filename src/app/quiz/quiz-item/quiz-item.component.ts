import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styles: []
})
export class QuizItemComponent implements OnInit {

  @Input() quiz: Quiz;
  //@Output() quizOutput = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
