import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

interface NavItem{
  text: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  
  // Attributes
  logo = "/assets/logo_superquiz.png";
  user = new User({name:'Bobby', email:'bobleponge@mail.me'});
  navItems: NavItem[] = [
    {text:'Accueil', path:'home'},
    {text:'Quizzes', path:'quizzes'},
    {text:'Admin', path:'#'},
    {text:'Login', path:'login'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
