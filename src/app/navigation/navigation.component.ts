import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
jQuery('document').ready(function($){
  var menuBtn = $('.menu-icon'),
  menu = $('.navigation ul');
  
  menuBtn.click(function(){
     if( menu.hasClass ('show')){
         menu.removeClass('show');
     } else {
      menu.addClass('show');
     }
  });
  });