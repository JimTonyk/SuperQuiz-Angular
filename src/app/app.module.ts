import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { QuizModule } from './quiz/quiz.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HttpClientModule } from '@angular/common/http';

//Pour tout assigner à un tableau et l'appeler une fois rempli dans l'importation (plus élégant)
const routes: Routes= [
  {path: 'home', component: HomeComponent},
  //{path: 'login', component: LoginComponent},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    QuizModule,
    //Début des redirections vers l'écran d'accueil et la page login
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  //Ajout de l'adresse en constante dure prête à utiliser
  providers: [
    {provide: 'JSON_SERVER_URL', useValue: 'http://localhost:3004',}
  ]
})
export class AppModule { }
