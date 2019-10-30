import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  herramientasElectricas: String[]=['Destornilladores Electricos','Llaves de Impacto',
  'Pulidora','Pistola de Calor','Tronzadoras','Sierras','Fresadoras','Ruteadoras','Amoladora','Bailejo','Barra','Champeadora','Cizalla'];
  precio: String[] = ['50.000','79.000','85.000','210.000','94.000','101.000','77.000','130.000','150.000','180.000','111.000','122.000','133.000']
  producto;

  addToCar(nombreProd,precioProd){
    let nombreProducto= nombreProd.value;
    let precioProducto = precioProd.value;
      for (let index = 0; index < this.herramientasElectricas.length; index++) {
        if (this.herramientasElectricas[index]==nombreProducto) {
          localStorage.setItem("producto",JSON.stringify(this.herramientasElectricas[index]));
          this.router.navigate(["carrito"])
        }
        
      }
      for (let index = 0; index < this.precio.length; index++) {
        if (this.precio[index]==precioProducto) {
          localStorage.setItem("precio",JSON.stringify(this.precio[index]));
          this.router.navigate(["carrito"])
        }
        
      }
     

  }


  constructor(private router:Router) { }

  ngOnInit() {
  }

}
