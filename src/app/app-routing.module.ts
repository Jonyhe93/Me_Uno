import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { HomeComponent } from './components/home/home.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "login", component: LoginComponent },
  { path: "registrate", component: RegistrateComponent },
  { path: "eventos", component: EventosComponent },
  { path: "home", component: HomeComponent },
  { path: "create-event", component: CreateEventComponent },
  { path: "update/:idevent", component: CreateEventComponent },
  { path: "mi-perfil", component: MiPerfilComponent },
  { path: "**", redirectTo: '/eventos' }



];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "ignore",
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
