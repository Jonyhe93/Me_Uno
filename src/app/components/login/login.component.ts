import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuariosService.login(this.formulario.value)
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          alert('Login correctísimo');
          localStorage.setItem('token_gym', response.token);
          this.router.navigate(['/clientes']);
        }
      }).catch(err => console.log(err));
  }

}
