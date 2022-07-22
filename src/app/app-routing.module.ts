import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrateComponent } from './components/registrate/registrate.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "login", component: LoginComponent },
  { path: "registrate", component: RegistrateComponent },
  { path: "eventos", component: EventosComponent },
  { path: "home", component: HomeComponent },
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
