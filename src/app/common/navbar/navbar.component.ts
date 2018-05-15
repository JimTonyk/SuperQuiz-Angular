import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  logo = "/assets/logo_superquiz.png";

  user = new User({name:'Bobby', email:'bobleponge@mail.me'});

  ngOnInit() {
  }

}
