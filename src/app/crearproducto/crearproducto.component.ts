import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {
  nombreP;

  crearProducto(nombre,precio){
    let nombreProducto = nombre.value;
    //this.nombreP.push(nombre.value);
    //this.precioP.push(precio.value);
     localStorage.setItem("nombre",JSON.stringify(nombreProducto));
    this.nombreP.push(nombreProducto);
    this.nombreP = JSON.parse(localStorage.getItem("nombre"));
    this.router.navigate(["productos"]);
  }


  constructor(private router:Router) { }

  ngOnInit() {
  }

}
