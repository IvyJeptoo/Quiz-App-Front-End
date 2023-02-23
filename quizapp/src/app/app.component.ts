import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizapp';

  constructor(
    public authService: AuthenticationService,
    private router: Router
    ) {}

    isLoginPage(){
      return this.router.url === '/authentication/login'
    }
    isSignUpPage(){
      return this.router.url === '/authentication/sign-up'
    }
    isWelcomePage(){
      return this.router.url ==='/welcome'
    }

  ngOnIt(): void {
    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('expirationTime')
    console.log('Token:', token);
    
    if(token && expirationTime){
      const now = new Date().getTime();
      if(now > parseInt(expirationTime)){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        this.authService.logout();
        this.router.navigate(['/authentication/login'])
      }
    }
  }
}
