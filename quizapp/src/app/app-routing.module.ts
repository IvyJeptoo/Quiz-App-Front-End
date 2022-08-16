import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuizComponent } from './components/all-quiz/all-quiz.component';

const routes: Routes = [
  {path: '', component: AllQuizComponent},
  {path: 'allquiz', component: AllQuizComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
