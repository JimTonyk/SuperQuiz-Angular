import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Cette classe générique permet de générer des champs de textes automatiquement et de contrôler leur validation sans avoir à copier coller
 */

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styles: []
})
export class FieldComponent implements OnInit {

  @Input() label: string; //quizForm.quizTitle
  @Input() control: FormControl //quizForm.get('quiztitle')
  @Input() baliseHTML: string; //<input type="text" class="form-control" placeholder="Titre" formControlName="quizTitle">

  constructor() { }

  ngOnInit() {
  }

}
