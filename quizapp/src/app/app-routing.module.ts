import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuizComponent } from './components/all-quiz/all-quiz.component';
import { CreateQuestionsComponent } from './components/create-questions/create-questions.component';
import { CreatequizComponent } from './components/createquiz/createquiz.component';
import { TakequizComponent } from './components/takequiz/takequiz.component';

const routes: Routes = [
  {path: '', component: AllQuizComponent},
  {path: 'takequiz', component: TakequizComponent},
  {path: 'addquestions', component:CreateQuestionsComponent },
  {path: 'createquiz', component: CreatequizComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AllQuizComponent,
  CreateQuestionsComponent,
  CreateQuestionsComponent
]
