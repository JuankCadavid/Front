import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Login = {
    email: '',
    password: '',
  };

  asw;
  prf;

  conversionEncryptOutput: string;
  conversionDecryptOutput: string;



  constructor(private loginservice: LoginService, private router: Router) { }



  ngOnInit() {

  }

  sendCred() {


    this.loginservice.sendCredentials(this.credentials).subscribe(
      (res: any) => {


        this.prf = res.persona;

        this.asw = JSON.stringify(this.prf.map(res => res.persopercl));

        localStorage.setItem('auth_token', res.token);


        // Encrypt

        this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.asw, 'dcripcoagroeco');

        localStorage.setItem('prf', this.conversionEncryptOutput);


        // Decrypt
        this.conversionDecryptOutput = localStorage.getItem('prf')

        var bytes = CryptoJS.AES.decrypt(this.conversionDecryptOutput.toString(), 'dcripcoagroeco');

        var plaintext = bytes.toString(CryptoJS.enc.Utf8);


        if (plaintext[1] == 1) {

          this.router.navigate(['/products']);

        } else if (plaintext[1] == 2) {

          this.router.navigate(['/products/add']);

        } else if (plaintext[1] == 3) {

          if (res.token) {

            this.router.navigate(['/sales/fruveg']);

          }

        }

      },
      err => {
        console.log(err)
        window.alert('Valide sus credenciales e intente nuevamente')

      }


    )

  }




}
