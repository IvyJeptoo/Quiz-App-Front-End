import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllQuizComponent } from './components/all-quiz/all-quiz.component';
import { CreatequizComponent } from './components/createquiz/createquiz.component';
import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';
import { TakequizComponent } from './components/takequiz/takequiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllQuizComponent,
    CreatequizComponent,
    CreateQuestionsComponent,
    TakequizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
