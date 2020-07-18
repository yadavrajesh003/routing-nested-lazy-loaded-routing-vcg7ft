import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one.component';

const routes: Routes = [
  {
    path: '',
    component: OneComponent,
    children: [  
      { path: '', redirectTo: 'three' }, // Comment to make lazy    
      { path: 'three', loadChildren: './three/three.module#ThreeModule' },
      { path: 'four', loadChildren: './four/four.module#FourModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OneComponent]
})
export class OneModule { }