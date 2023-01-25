import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuizComponent } from './quiz-category/quiz-categories/all-quiz.component';
import { CreateQuestionsComponent } from './questions/create-questions/create-questions.component';
import { CreatequizComponent } from './quiz-category/create-quiz/createquiz.component';
import { ResultschoicesComponent } from './questions/resultschoices/resultschoices.component';
import { TakequizComponent } from './questions/take-quiz/takequiz.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'quiz',
    loadChildren: () => import ('./quiz-category/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'questions',
    loadChildren: () => import ('./questions/questions.module').then(m => m.QuestionsModule)
  },
  { path: '', redirectTo: 'quiz/all-quiz', pathMatch: 'full' },

  
  


]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
];
