import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products'
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  delete: boolean = true;

  product: Products = {

    codigo: 0,
    descripcion: '',
    cantidad: 0,
    precio: 0,
    imagen: '',

  };
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
    this.delete = false;
  }


  getProducts() {
    this.productService.getProducts().subscribe(
      res => {

        this.products = res;

      },
      err => console.log(err)

    )
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      res => {

        this.getProducts();

      },
      err => console.log(err)

    )

  }


  editProduct(id: string) {
    console.log(id);

    this.productService.updateProduct(id, this.product)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/proyectos/add']);

        },
        err => console.log(err)

      )
  }

  funcDelete(valid: boolean) {
    if (valid) {
      this.delete = true;
    } else {
      this.delete = false;
    }

  }

  logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
