import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String[]=['elbichocr714@gmail.com','elkaizer@gmail.com','donleo@gmail.com','elmiller@gmail.com'];
  password:String;
  decirHola(){
    alert("estamos iniciando sesion");
  }

  iniciarSesion(email){
    for (let index = 0; index < this.email.length; index++) {
      if (email=this.email[index]) {
        this.email.splice(index, 1)
      }
      
    }

  }
  addEmail(newEmail){
    this.email.push(newEmail.value);
    newEmail.value="";
    newEmail.focus();
    return false
  }
  constructor() {

   }

  ngOnInit() {
    this.email=this.email;
    this.password="asd$123";
  }

}
