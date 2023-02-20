import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';





@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: any;
  public authenticated = false;


 

  constructor(private http: HttpClient) { 
    this.currentUser = null;

  }

  signUpAsTeacher(user: any): Observable<any> {
    console.log('hello teacher');
    
    return this.http.post(`${environment.signup_url}/teacher/`, user)

  }
  signUpAsStudent(user: any): Observable<any>{
    console.log('hello student');
    
    return this.http.post(`${environment.signup_url}/student/`, user)
  }

  userLogin(user: any): Observable<any>{
    return this.http.post(`${environment.login_url}`, user)
    .pipe(
      tap((response) => {
        this.authenticated = true;
        localStorage.setItem('authenticated','true')
        this.setCurrentUser(response)
        console.log(this.currentUser);
        

      })
    )

    
  }
  setCurrentUser(user: any) {
    if(user) {
      console.log('setting current user:', user);
      this.currentUser = user.user_id;

    }else {
      console.log('cannot set current user, user is undefined');
      
    }
    
  }
  // getCurrentUser() {
  //   return this.currentUser;
  // }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  logout() {
    localStorage.removeItem('token');
    this.authenticated = false;
  }
  isAuthenticated(): boolean{    
    
    // console.log(this.authenticated);
    return this.authenticated;
    
  }

}
