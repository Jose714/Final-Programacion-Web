import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String[]=['elbichocr714@gmail.com','elkaizer@gmail.com'];
  password:String="asd$123";
  user;

  iniciarSesion(nameEmail,nPass){

    let validarEmail=nameEmail.value;
    let validarPass=nPass.value;
    //login para el usuario administrador
    if (validarEmail==this.email[0] && validarPass) {
      localStorage.setItem("email",JSON.stringify(this.email[0]));
      this.user=JSON.parse(localStorage.getItem("email"));
      this.router.navigate(["crearproducto"]);


    }
    //login para el usuario comun
    else if (validarEmail==this.email[1] && validarPass) {
      localStorage.setItem("email",JSON.stringify(this.email[1]));
      this.user=JSON.parse(localStorage.getItem("email"));
      this.router.navigate(["users"]);


    }else{
      this.router.navigate(["error"]);
    }
  }

  constructor(private router: Router) {

   }

  ngOnInit() {

  }



}
