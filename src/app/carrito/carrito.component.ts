import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
<<<<<<< HEAD
  
  msg: string = '';
  produc = [];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;
compra: number;

  myValue;
  editProduc(i): void {
    this.hideUpdate = false;
    this.model2.Articulo = this.produc[i].Articulo;
    this.model2.Precio = this.produc[i].Precio;
    this.myValue = i;
  }
Comprar(){
  alert("Gracias por tu compra")
  this.router.navigate(["productos"])
}
  Cancelar(){
    alert("compra cancelada")
    this.router.navigate(["productos"])
  }
  
  addToCar(compra): void {
    
  }

  product = JSON.parse(localStorage.getItem("producto"));
  constructor(private router: Router) { }




=======

product = JSON.parse(localStorage.getItem("producto"));
  constructor(private router: Router) { }

>>>>>>> 7a719f8569e9ee918d340c291f53fda9fffcba62
  ngOnInit() {
  }

}
