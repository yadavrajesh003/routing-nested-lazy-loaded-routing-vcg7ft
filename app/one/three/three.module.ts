import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ThreeComponent } from './three.component';

const routes: Routes = [
  { path: '', component: ThreeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThreeComponent]
})
export class ThreeModule { }