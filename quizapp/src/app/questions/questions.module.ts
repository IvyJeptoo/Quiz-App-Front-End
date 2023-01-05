import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TakequizComponent } from './take-quiz/takequiz.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';

const routes: Routes = [
  {
    path: 'create-questions',
    component: CreateQuestionsComponent,
  },
  {
    path: 'take-quiz',
    component: TakequizComponent,
  },
];

@NgModule({
  declarations: [TakequizComponent, CreateQuestionsComponent],
  imports: [CommonModule, 
    RouterModule.forChild(routes)
   ],
  exports: [TakequizComponent, CreateQuestionsComponent],
})
export class QuestionsModule {}
