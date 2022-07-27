import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  user: User | any

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {

  }
  logout(): void {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

}
