import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../../data/quizzes';
import { Answer } from '../../models/answer';
import { AnswersState, QuizStateManager } from '../quiz-state-manager.service';
import { QuizService } from '../quiz.service';
import { Quiz } from '../../models/quiz';
import { Question } from '../../models/question';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: [],
  providers: [QuizStateManager]
})
export class QuizPlayerComponent implements OnInit {

  //Avec un appel aux services, les classes injectées sont observées. Le QSM est la tour de contrôle
  currentQuiz: Observable<Quiz>;
  currentQuestion: Observable<Question>;
  currentAnswer: Observable<Answer>;
  currentAnswers: Observable<AnswersState>;

  isStarted = false;

  constructor(private quizService: QuizService,
    private quizStateManager: QuizStateManager,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    // Initialise les propriétés du composant à partir du QSM
    this.currentQuiz = this.quizStateManager.getCurrentQuiz();
    this.currentQuestion = this.quizStateManager.getCurrentQuestion();
    this.currentAnswer = this.quizStateManager.getCurrentAnswer();
    this.currentAnswers = this.quizStateManager.getCurrentAnswers();

    //Récupération de l'identité du quiz pour charger le bon quiz avec son numéro
    this.route.paramMap.subscribe((param: ParamMap) => {
      // Charge le quiz que l'utilisateur a cliqué
      // Astuce : l'id du quiz viendra de l'URL
      const quizId = Number(param.get('quizId'));
      const quiz = this.quizService.loadQuiz(quizId);
      // Pousse le quiz chargé dans l'observable
      this.quizStateManager.setQuiz(quiz);
    })
  }


  startQuiz() {
    this.isStarted = true;
    // TODO: Utilise le QuizStateManager pour aller à la première question
    this.quizStateManager.gotoFirstQuestion();
  }
  //Recupère la réponse envoyée par emit et sera utilisée dans l'output dans le code HTML
  reponseRecue(answer: Answer) {
    // vérifie si le programme passe par cette méthode
    console.log('Enregistrée');
    // TODO: sauvegarder la reponse dans le service QuizStateManager
    this.quizStateManager.addAnswer(answer);
  }

  gotoNextQuestion() {
    // TODO: Aller à la question suivante avec QuizStateManager.
    this.quizStateManager.gotoNextQuestion();
  }

  gotoPreviousQuestion() {
    // TODO: Aller à la question précédente avec QuizStateManager
    this.quizStateManager.gotoPreviousQuestion();
  }

}
