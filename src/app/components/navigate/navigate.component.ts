import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor() { }

  usuario: string;

  ngOnInit() {
    this.logIn();
    if (localStorage.getItem('prf') == '1') {
      this.usuario = 'Agricultor'
    }else{
      this.usuario = 'Industrial'
    }

  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('prf');
  }


  logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
