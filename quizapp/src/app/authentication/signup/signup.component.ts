import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  showAlert = false;

  constructor(
    private formbuilder: FormBuilder,
    private authService : AuthenticationService,
    private router : Router
    ) { }

  ngOnInit(): void { 
    this.userSignUpForm()
  }
  userSignUpForm(){
    this.signUpForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }  

  passwordMatchValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if(password !== confirmPassword){
      formGroup.get('confirmPassword')?.setErrors({mismatch: true})
    } else {
      formGroup.get('confirmPassword')?.setErrors(null)
    }
    
  }

  onSubmit(){
    console.log('signupform valid:', this.signUpForm.valid);
    
    if(this.signUpForm.valid && this.signUpForm.dirty){
      const user = this.signUpForm.value;
      const role = this.signUpForm.get('role')?.value;
      if(role === 'student'){
        this.authService.signUpAsStudent(user)
        .pipe(first())
        .subscribe(
          (response) => {
            console.log('signup successful', response);
            this.showAlert = true;
            
            this.router.navigate(['/authentication/login'])

          },        
          
        
        (error) => {
          console.log('signup fail', error);
          
        }
        );
      } else if(role === 'teacher') {
        this.authService.signUpAsTeacher(user)
        .pipe(first())
        .subscribe(
          (response) => {
            console.log('signup successful', response);  
            this.showAlert = true;          
            this.router.navigate(['/authentication/login'])
            
            

          },
          (error) =>{
            console.log('signup fail', error);

          }
        )

      }
    }
    
  }

}
