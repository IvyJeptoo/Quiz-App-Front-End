import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  {
    path: 'quiz',
    loadChildren: () => import ('./quiz-category/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'questions',
    loadChildren: () => import ('./questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import ('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },

  
  


]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
];
