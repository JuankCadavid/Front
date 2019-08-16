import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'https://agroecommerce.azurewebsites.net/api'

  constructor(private http: HttpClient) { }

  sendCredentials(credentials:Login){
    return this.http.post(`${this.API_URI}/login`,credentials)
  }
}
