import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router} from '@angular/router';
import { Selected } from 'src/app/models/selected';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-fruveg',
  templateUrl: './fruveg.component.html',
  styleUrls: ['./fruveg.component.css']
})

export class FruvegComponent implements OnInit {

  //Init
  products: any = [];
  searchTerm: string;
  conversionDecryptOutput: string;
  user: string;
  logon: boolean;

  //Car
  rec = [];
  carList: any =[];
  closeResult: string;
  listshow: any = [];

  select: Selected = {

    descripcion: '',
    cantidad: 1,
    precio: 0,
    imagen: '',

  };



  constructor(private productService: ProductsService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {

    this.getProducts();

    if (localStorage.getItem('auth_token') !== null && localStorage.getItem('prf') !== null) {
      this.logon = true;
    }

    // Decrypt
    this.conversionDecryptOutput = localStorage.getItem('prf')

    if (this.conversionDecryptOutput) {

      var bytes = CryptoJS.AES.decrypt(this.conversionDecryptOutput.toString(), 'dcripcoagroeco');

      var plaintext = bytes.toString(CryptoJS.enc.Utf8);

      if (plaintext[1] == '1') {
        this.user = 'Agricultor'
      } else if (plaintext[1] == '2') {
        this.user = 'Industrial'
      } else if (plaintext[1] == '3') {
        this.user = 'Persona'
      }
    }

  }

  getProducts() {

    this.productService.getFruveg().subscribe(
      res => {

        this.products = res;
        
      },
      err => console.log(err)

    )

  }

  showModal(producto: any, modal) {

    this.select.cantidad = 1,
    this.select.descripcion = producto.descripcion;
    this.select.precio = producto.precio;
    this.select.imagen = producto.imagen;
    this.modalService.open(modal);

  }

  addCar(select: any, modal) {

    this.rec = JSON.parse(localStorage.getItem('allEntries'));

    if (this.rec == null) this.rec = [];

    var entry = {
      "desc": select.descripcion,
      "price": select.precio,
      "cant":select.cantidad
    };


    localStorage.setItem("entry", JSON.stringify(entry));

    this.rec.push(entry);


    localStorage.setItem("allEntries", JSON.stringify(this.rec));

    this.closeModal(modal);
    this.showList();

  }

  showList() {

    this.carList = JSON.parse(localStorage.getItem('allEntries'));

    this.listshow = this.carList.map(res => res)

   console.log(this.listshow);
   
  }

  closeModal(modal) {
    this.modalService.dismissAll(modal);
  }


}
