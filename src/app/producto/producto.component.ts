import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
<<<<<<< HEAD
  
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

=======
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
     
>>>>>>> 7a719f8569e9ee918d340c291f53fda9fffcba62

  }


  constructor(private router:Router) { }

  ngOnInit() {
  }

}
