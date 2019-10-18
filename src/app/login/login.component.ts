import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  email: String[]=['elbichocr714@gmail.com','elkaizer@gmail.com','donleo@gmail.com','elmiller@gmail.com'];
  password:String="asd$123";
  decirHola(){
    alert("estamos iniciando sesion");
  }


  iniciarSesion(nameEmail,nPass){
    /*for (let index = 0; index < this.email.length; index++) {
      if (email=this.email[index]) {
        this.email.splice(index, 1)
      }*/
      let validarEmail=nameEmail.value;
      let validarPass=nPass.value;
      if (validarEmail==this.email[1] && validarPass) {
        localStorage.setItem("email",JSON.stringify(this.email));
        let email=JSON.parse(localStorage.getItem("email"));
        this.router.navigate(["users"]);
       // document.write("Haz iniciado Sesion correctamente "+email+" name email:|"+validarEmail+" pasword:|"+validarPass);
       
      }else{
        this.router.navigate(["error"]);
        
        //alert("Datos Erroneos")
      }
      
    }

  
  addEmail(newEmail){
    this.email.push(newEmail.value);
    newEmail.value="";
    newEmail.focus();
    return false
  }
  constructor(private router: Router) {

   }

  ngOnInit() {
   
  }

}
