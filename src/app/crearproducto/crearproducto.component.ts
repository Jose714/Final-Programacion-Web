import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {
  nombreP:String[]=new Array;

  crearProducto(nombre,precio){
    let nombreProducto = nombre.value;
    let precioProducto = precio.value;

      let aux = localStorage.setItem("nombre",JSON.stringify(nombreProducto));
      localStorage.setItem("precio",JSON.stringify(precioProducto));

     this.nombreP.push(nombre.value);
     
     console.log(this.nombreP)
     this.router.navigate(["crearproducto"]);
      
  
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
