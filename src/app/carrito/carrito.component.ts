import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

product = JSON.parse(localStorage.getItem("producto"));
carrit = JSON.parse(localStorage.getItem("precio"));
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
