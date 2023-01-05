import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AllQuizComponent } from './all-quiz/all-quiz.component';
import { CreatequizComponent } from './create-quiz/createquiz.component';

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
    CreatequizComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AllQuizComponent,
    CreatequizComponent
  ]
})
export class QuizModule { }
