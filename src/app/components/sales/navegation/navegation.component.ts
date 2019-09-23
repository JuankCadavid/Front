import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  usuario: string;
  conversionDecryptOutput: string;


  constructor() { }

  ngOnInit() {
    this.logIn();

// Decrypt
this.conversionDecryptOutput = localStorage.getItem('prf')

if(this.conversionDecryptOutput){

var bytes = CryptoJS.AES.decrypt(this.conversionDecryptOutput.toString(), 'dcripcoagroeco');

var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    if (plaintext[1] == '1') {
      this.usuario = 'Agricultor'
    } else if (plaintext[1] == '2') {
      this.usuario = 'Industrial'
    } else if (plaintext[1] == '3') {
      this.usuario = 'Persona'
    }
  }
}

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('prf');
    localStorage.removeItem('allEntries');
    localStorage.removeItem('entry');
  }


  logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }



}
