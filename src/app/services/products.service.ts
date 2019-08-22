import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'https://agroecommerce.azurewebsites.net/api'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.API_URI}/products`);
  }

  getOneProduct(id: string) {
    return this.http.get(`${this.API_URI}/products/${id}`)
  }

  saveProduct(product: Products) {
    return this.http.post(`${this.API_URI}/products`, product)
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.API_URI}/products/${id}`)
  }

  updateProduct(id: string | number, product: Products) {
    return this.http.put(`${this.API_URI}/products/${id}`, product)
  }

  getFruveg() {
    return this.http.get(`${this.API_URI}/sales/fruveg`);
  }

  getDerivates() {
    return this.http.get(`${this.API_URI}/sales/derivates`);
  }
}
