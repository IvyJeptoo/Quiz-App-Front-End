import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuizComponent } from './quiz/all-quiz/all-quiz.component';
import { CreateQuestionsComponent } from './questions/create-questions/create-questions.component';
import { CreatequizComponent } from './quiz/create-quiz/createquiz.component';
import { ResultschoicesComponent } from './results/resultschoices/resultschoices.component';
import { TakequizComponent } from './questions/take-quiz/takequiz.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//   { path: 'welcome', component: WelcomeComponent },
//   { path: 'takequiz', component: TakequizComponent },
//   { path: 'addquestions', component: CreateQuestionsComponent },
//   { path: 'createquiz', component: CreatequizComponent },
//   { path: 'choices', component: ResultschoicesComponent },
//   { path: 'allquiz', component: AllQuizComponent },

// ];
const appRoutes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'questions',
    loadChildren: () => import ('./questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import ('./quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'main-results',
    loadChildren: () => import ('./results/results.module').then(m => m.ResultsModule)
  },


]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AllQuizComponent,
  CreateQuestionsComponent,
  CreateQuestionsComponent,
];
