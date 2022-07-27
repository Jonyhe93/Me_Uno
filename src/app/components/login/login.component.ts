import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      username: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null),
    })
  }

  ngOnInit(): void {
  }

  async getDataForm(pForm: any) {

    try {
      const response: User | any = await this.usersService.login(pForm.value)
      console.log(response);
      if (response.token) {
        localStorage.setItem('user', response.token)
        window.location.href = "/mi-perfil";
      }
      else {
        alert(response.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

}
