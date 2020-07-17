import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', loadChildren: './one/one.module#OneModule' },
  { path: 'two', loadChildren: './two/two.module#TwoModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false // Turn this on to log routing events to the console
  // ,preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes, config) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
