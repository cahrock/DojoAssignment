import { Component, OnInit } from '@angular/core';
import { Cookie } from "ng2-cookies";
import { Router } from "@angular/router";
import { LoginRegistrationService } from "app/login-registration.service";
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = Cookie.get("keyone")

  cookies: Object;
  keys: Array<string>;
  // title = 'Cookie'
  constructor(
      private _Router:Router,
      private _CookieService: CookieService
  ) {
    //   console.log('Logged user id :', Cookie.get(user._id) )
    this.cookies = this._CookieService.getAll()
    this.keys = Object.keys(this.cookies)
    // console.log(this.cookies)
   }

  ngOnInit() {
  }
  logOut(){
    Cookie.deleteAll()
    this._Router.navigateByUrl('login')
  }
}
