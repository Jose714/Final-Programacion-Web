import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  herramientasElectricas: String[] = ['Sierras', 'Ruteadoras', 'Pulidora', 'Pistola de Calor', 'Llaves de Impacto', 'Fresadoras', 'Destornilladores Electricos',
    'soldador', 'taladro', 'Tronzadoras',];

  addToCar() {

    if (this.herramientasElectricas[0] === "Sierras") {
      alert("Compraste " + this.herramientasElectricas[0]);

    } else if (this.herramientasElectricas[1] === "Ruteadoras") {
      alert("Compraste " + this.herramientasElectricas[1]);

    } else if (this.herramientasElectricas[2] === "Pulidora") {
      alert("Compraste " + this.herramientasElectricas[2]);

    } else if (this.herramientasElectricas[3] === "Pistola de Calor") {
      alert("Compraste " + this.herramientasElectricas[3]);

    } else if (this.herramientasElectricas[4] === "Llaves de Impacto") {
      alert("Compraste " + this.herramientasElectricas[4]);

    } else if (this.herramientasElectricas[5] === "Fresadoras") {
      alert("Compraste " + this.herramientasElectricas[5]);

    } else if (this.herramientasElectricas[6] === "Destornilladores Electricos") {
      alert("Compraste " + this.herramientasElectricas[6]);

    } else if (this.herramientasElectricas[7] === "soldador") {
      alert("Compraste " + this.herramientasElectricas[7]);

    } else if (this.herramientasElectricas[8] === "taladro") {
      alert("Compraste " + this.herramientasElectricas[8]);

    } else if (this.herramientasElectricas[9] === "Tronzadoras") {
      alert("Compraste " + this.herramientasElectricas[9]);
    }


  }


  constructor() { }

  ngOnInit() {
  }

}
