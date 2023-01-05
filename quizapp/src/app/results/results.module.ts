import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResultschoicesComponent } from './resultschoices/resultschoices.component';

const routes: Routes = [
  {
    path: 'results',
    component: ResultschoicesComponent,
  }
];

@NgModule({
  declarations: [
    ResultschoicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ResultschoicesComponent
  ]

})
export class ResultsModule { }
