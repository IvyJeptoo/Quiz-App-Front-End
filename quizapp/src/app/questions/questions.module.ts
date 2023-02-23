import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { ResultschoicesComponent } from './resultschoices/resultschoices.component';
import { HttpClientModule } from '@angular/common/http';
import { TakequizComponent } from './take-quiz/takequiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: ':categoryId',
    component: TakequizComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'create-questions',
    component: CreateQuestionsComponent,
    canActivate:[AuthGuard]

  },
  
  {
    path: 'results',
    component: ResultschoicesComponent,
    canActivate:[AuthGuard]

  },
  
];

@NgModule({
  declarations: [ 
    TakequizComponent,
    CreateQuestionsComponent,
    ResultschoicesComponent
  ],
    
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
   ],
  exports: [],
})
export class QuestionsModule {}
