import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: String = 'final@gmail.com';
  password: String = "asd$123";



  iniciarSesion(correo, clave) {
    let validarEmail = correo.value;
    let validarPass = clave.value;
    if (validarEmail == this.email && validarPass == this.password) {
      this.router.navigate(["navigation"]);
      alert("iniciando sesion")

    } else {
      alert("Datos Erroneos")
    }

  }
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

}


