import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from '../../quiz/quiz.service';
import { Quiz } from '../../models/quiz';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html'
})
export class QuizFormComponent implements OnInit {

  //importe le formulaire crée dans le code HTML
  quizForm: FormGroup;
  quizId;

  constructor(private fb: FormBuilder,
              private qs: QuizService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //Construction du formulaire toujours à vide
    this.quizForm = this.fb.group({
      quizTitle: ['',[Validators.required, Validators.maxLength(20)]], //Ce champ sera obligatoire
      quizDescription: [''],
      quizMultipleChoices: [false]
    })
    
    // A t'on déjà un quiz avec cet Id ? Oui => Update, Non => Post
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.quizId = Number(param.get('quizId'));
      //Remise des valeurs des champs dans le formulaire 
      if(this.quizId){
        this.qs.loadQuiz(this.quizId).subscribe(quiz => {
          this.quizForm.get('quizTitle').setValue(quiz.title);
          this.quizForm.get('quizDescription').setValue(quiz.description);
          this.quizForm.get('quizMultipleChoices').setValue(quiz.canRetryQuestion);
          //De manière plus générique, possibilité de passer par un patchValue()
        });
      }
    });
  }

  saveQuiz(){
    const quiz = new Quiz({
      id: this.quizId,
      title : this.quizForm.get('quizTitle').value,
      description: this.quizForm.get('quizDescription').value,
      canRetryQuestion: this.quizForm.get('quizMultipleChoices').value
    });
    this.qs.saveQuiz(quiz).subscribe(() => {
      //Confirmation de modification ou de création
      this.quizId? alert('Quiz modifié') : alert('Quiz créé');
      //Redirection
      this.router.navigate(['admin/quiz']);
    });
  }

}
