import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lonuevo',
  templateUrl: './lonuevo.component.html',
  styleUrls: ['./lonuevo.component.css']
})
export class LonuevoComponent implements OnInit {
  nombre = JSON.parse(localStorage.getItem("nombre"));
  precio = JSON.parse(localStorage.getItem("precio"));

  msg (){
    alert(" Se ha añadido al carrito")
  }

  constructor() { }

  ngOnInit() {
  }

}
