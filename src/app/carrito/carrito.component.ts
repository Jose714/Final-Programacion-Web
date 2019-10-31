import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
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




  ngOnInit() {
  }

}
