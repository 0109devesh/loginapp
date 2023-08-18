import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {  

    console.log(this.loginService.isLoggedIn());
    
    if (this.loginService.isLoggedIn()) {

      return true;
     
    }
  
    this.router.navigate(['login']);
    return false;
  }
}
