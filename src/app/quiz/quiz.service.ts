import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QUIZZES } from '../data/quizzes';

@Injectable()
export class QuizService {

  constructor() { }

  // Retourne la liste des Quizzes
  loadQuizzes(): Quiz[]{
    return QUIZZES;

  }

  // Retourne un quizz
  loadQuiz(quizId: number): Quiz{
    // find retourne un booléen et va boucler sur tous les quizzes du tableau
    return QUIZZES.find(quiz => quiz.id === quizId);
  }

}
