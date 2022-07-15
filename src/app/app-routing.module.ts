import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RegistrateComponent } from './registrate/registrate.component';

const routes: Routes = [
  { path: "header", component: HeaderComponent, pathMatch: "full" },
  { path: "footer", component: FooterComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registrate", component: RegistrateComponent, pathMatch: "full" },
  { path: "eventos", component: EventosComponent, pathMatch: "full" },
  { path: "noticias", component: NoticiasComponent, pathMatch: "full" },
  { path: "contacto", component: ContactoComponent, pathMatch: "full" }


];

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrateComponent, HeaderComponent, FooterComponent, EventosComponent, ContactoComponent, NoticiasComponent],
  imports: [BrowserModule, RouterModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
