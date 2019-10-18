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
    
      if (this.herramientasElectricas[0]=="Destornilladores Electricos") {
        document.write("Añadiendo al carrito"+this.herramientasElectricas[0]);
      }else if(this.herramientasElectricas[1]=="Destornilladores Electricos"){
        document.write("Añadiendo al carrito"+this.herramientasElectricas);
        //console.log("Añadiendo al carrito"+this.herramientasElectricas);
      }
    
    
  }

  constructor() { }

  ngOnInit() {
  }

}
