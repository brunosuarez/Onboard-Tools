import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DadosSellerComponent } from './dados-seller/dados-seller.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FerramentasComponent,
    LoginComponent,
    StatusComponent,
    DashboardComponent,
    DadosSellerComponent,
    RegistroComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }