import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //Do permet de transformer le booléen suivi si nécessaire. Le subscribe ne permet pas de renvoyer le booléen => Erreur !
    return this.authService.isLoggedIn().do(isLoggedIn => {
      if (!isLoggedIn) {
        alert('Authentification nécessaire !');
      }
      return isLoggedIn;
    });
  }
}
