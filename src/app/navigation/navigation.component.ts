import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
user = JSON.parse(localStorage.getItem("email"));
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(["/"])
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
