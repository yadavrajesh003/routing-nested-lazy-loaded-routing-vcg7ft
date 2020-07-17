import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TwoComponent } from './two.component';

const routes: Routes = [
  { path: '', component: TwoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TwoComponent]
})
export class TwoModule { }