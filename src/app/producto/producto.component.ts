import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  herramientasElectricas: String[]=['Destornilladores Electricos','Llaves de Impacto',
  'Pulidora','Pistola de Calor','Tronzadoras','Sierras','Fresadoras','Ruteadoras'];

  addToCar(){
    for (let index = 0; index < this.herramientasElectricas.length; index++) {
    alert("Añadiendo al carrito"+this.herramientasElectricas[index]);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
