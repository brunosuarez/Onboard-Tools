import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'login', component: LoginComponent},
  { path:'registro', component: RegistroComponent},
  { path: 'ferramentas', component: FerramentasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }