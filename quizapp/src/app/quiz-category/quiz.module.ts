import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AllQuizComponent } from './quiz-categories/all-quiz.component';
import { CreatequizComponent } from './create-quiz/createquiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'create-quiz',
    component: CreatequizComponent,
  },
  {
    path: 'all-quiz',
    component: AllQuizComponent,
  },
  
];

@NgModule({
  declarations: [
    AllQuizComponent,
    CreatequizComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    AllQuizComponent,
    CreatequizComponent
  ]
})
export class QuizModule { }
