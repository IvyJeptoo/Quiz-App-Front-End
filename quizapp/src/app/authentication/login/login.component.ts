import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loginError = false;
  showAlert = false;

  constructor(
    private authService: AuthenticationService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { 
    
  }


  ngOnInit(): void {  
    this.userLoginForm()   

  }
 
  userLoginForm(){
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.submitted = true;
    this.loginError = false;
    
    
    if(this.loginForm.valid) {
      const user = this.loginForm.value;
      console.log('calling service');
      
      this.authService.userLogin(user).subscribe(
        (response) => {
          console.log(this.authService.isAuthenticated());
          
          this.router.navigate(['/welcome'])
          const token = response.token;
          localStorage.setItem('token', token);
          console.log(token);
          
          // if(response && response.token){
          //   this.authService.authenticated = true;
          //   localStorage.setItem('token', response.token)
          // }
          // this.authService.setCurrentUser(response);
          // const currentUser = this.authService.getCurrentUser()
          // console.log('current user:', currentUser);
          // console.log('authenticated', this.authService.authenticated);

          

        },
        (error) => {
          console.log('authenticated', this.authService.authenticated);

          if( error.error.non_field_errors){
            this.showAlert = true;
          };
          
        }
      );
    }
    

  }

}
