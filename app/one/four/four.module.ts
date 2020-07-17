import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FourComponent } from './four.component';

const routes: Routes = [
  { path: '', component: FourComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FourComponent]
})
export class FourModule { }