import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CreateEventComponent } from './components/create-event/create-event.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrateComponent,
    FooterComponent,
    EventosComponent,
    LoginComponent,
    HomeComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
