import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../models/products';
import { Router } from '@angular/router';
import { Selected } from 'src/app/models/selected';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-fruveg',
  templateUrl: './fruveg.component.html',
  styleUrls: ['./fruveg.component.css']
})

export class FruvegComponent implements OnInit {

  products: any = [];
  searchTerm: string;

  product: Products = {

    codigo: 0,
    descripcion: '',
    cantidad: 0,
    precio: 0,
    imagen: '',

  };

  select: Selected = {

    descripcion: '',
    precio: 0,
    imagen: '',

  };


  constructor(private productService: ProductsService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getFruveg().subscribe(
      res => {

        this.products = res;

      },
      err => console.log(err)

    )
  }

  show(product:any, modal) {
   
    this.select.descripcion = product;
    this.modalService.open(modal);

  }


}
