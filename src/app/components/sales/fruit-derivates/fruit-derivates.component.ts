import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../models/products';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Selected } from 'src/app/models/selected';

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

  select: Selected = {

    descripcion: '',
    cantidad:1,
    precio: 0,
    imagen: '',

  };


  constructor(private productService: ProductsService, private router: Router, private modalService: NgbModal) { }

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

  showModal(producto: any, modal) {

    this.select.descripcion = producto.descripcion;
    this.select.precio = producto.precio;
    this.select.imagen = producto.imagen;
    this.modalService.open(modal);
  }

  closeModal(modal) {
    this.modalService.dismissAll(modal);
  }

}
