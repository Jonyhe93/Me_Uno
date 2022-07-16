import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  goToRegistrate() {
    this.router.navigate(['/', 'registrate']);
  }
  goToLogin() {
    this.router.navigate(['/', 'login']);
  }
  goToEventos() {
    this.router.navigate(['/', 'eventos']);
  }
  goToContacto() {
    this.router.navigate(['/', 'contacto']);
  }

}
