import { Component, OnInit } from '@angular/core';
import { Cookie } from "ng2-cookies";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = Cookie.get("keyone")
  constructor(private _Router:Router) { }
  
  ngOnInit() {
  }
  logOut(){
    Cookie.deleteAll()
    this._Router.navigateByUrl('login')
  }
}
