import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ferramentas', component: FerramentasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
