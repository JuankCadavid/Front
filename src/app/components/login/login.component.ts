import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';



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


  constructor(private loginservice: LoginService, private router: Router) { }



  ngOnInit() {

  }

  sendCred() {


    this.loginservice.sendCredentials(this.credentials).subscribe(
      (res: any) => {

        this.asw = res;
        this.prf = res.persona;

        localStorage.setItem('auth_token', res.token);
        localStorage.setItem('prf', this.prf.map(res => res.persopercl));

        if (this.prf.map(res => res.persopercl) == 1) {

          this.router.navigate(['/products']);

        } else {
          this.router.navigate(['/products/add']);
        }

      },
      err => {
        console.log(err)
        window.alert('Valide sus credenciales e intente nuevamente')

      }


    )

  }




}
