import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { ResultsModule } from './results/results.module';
import { QuizModule } from './quiz/quiz.module';
import { QuestionsModule } from './questions/questions.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    UserAuthModule,    
    QuizModule,
    ResultsModule,
    AppRoutingModule,
    QuestionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
