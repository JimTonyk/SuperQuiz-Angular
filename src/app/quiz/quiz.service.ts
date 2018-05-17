import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QUIZZES } from '../data/quizzes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuizService {
  
  constructor(private http: HttpClient) { }

  // Retourne la liste des Quizzes
  loadQuizzes():Observable<Quiz []>{
    // TODO: Requête GET sur /quizzes
    return this.http.get<Quiz[]>('http://localhost:3004/quizzes');
  }

  // Retourne un quizz
  loadQuiz(quizId: number): Observable<Quiz>{
    // TODO: Requête GET sur /quizzes/quizId
    return this.http.get<Quiz>('http://localhost:3004/quizzes/'+quizId);
    // find retourne un booléen et va boucler sur tous les quizzes du tableau
    //return QUIZZES.find(quiz => quiz.id === quizId);
  }

}
