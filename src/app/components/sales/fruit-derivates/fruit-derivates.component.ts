import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit-derivates',
  templateUrl: './fruit-derivates.component.html',
  styleUrls: ['./fruit-derivates.component.css']
})
export class FruitDerivatesComponent implements OnInit {

  products: any = [];
  searchTerm:string;
  
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
  }

  
  getProducts() {
    this.productService.getDerivates().subscribe(
      res => {

        this.products = res;

      },
      err => console.log(err)

    )
  }

}
