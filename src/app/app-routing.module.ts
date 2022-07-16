import { NgModule } from '@angular/core';
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
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "login", component: LoginComponent },
  { path: "registrate", component: RegistrateComponent },
  { path: "eventos", component: EventosComponent },
  { path: "noticias", component: NoticiasComponent },
  { path: "contacto", component: ContactoComponent }


];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
