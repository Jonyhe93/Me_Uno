import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado: boolean = false

  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('user');
    if (token) {
      this.logado = true;
    } else {
      this.logado = false;
    }
  }

}
