import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { EventosComponent } from './eventos/eventos.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { RegistrateComponent } from './registrate/registrate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "login", component: LoginComponent },
  { path: "registrate", component: RegistrateComponent },
  { path: "eventos", component: EventosComponent },
  { path: "home", component: HomeComponent }



];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
