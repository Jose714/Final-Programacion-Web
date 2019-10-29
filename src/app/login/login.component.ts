import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { Location } from '@angular/common'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  
  constructor(private _router:Router) {

  }

  email: String = 'final@gmail.com';
  password: String = "asd$123";

  iniciarSesion(correo, clave) {
    let validarEmail = correo.value;
    let validarPass = clave.value;
    
    if (validarEmail == this.email && validarPass == this.password) {
      this._router.navigate(['navigation']);
      console.log("iniciando sesion");
      
    } else {
      console.log("error: ingrese bien los datos");
    }
  }

  ngOnInit() {

  }

}


