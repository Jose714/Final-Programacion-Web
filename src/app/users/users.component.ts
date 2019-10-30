import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
 user = JSON.parse(localStorage.getItem("email"));
 
  constructor() { }

  ngOnInit() {

  }

}
