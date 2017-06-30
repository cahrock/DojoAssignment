import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ng2-cookies';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { LoginRegistrationService } from "app/login-registration.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {email:"minh@nguyen.com", password:"1234567890"}
  constructor(private _LoginRegistrationService:LoginRegistrationService, private _Router:Router) {
    if(Cookie.check("logged_id")){
      this._Router.navigateByUrl('home')
    }
    console.log(Cookie.get("logged_id"));
  }

  ngOnInit() {
  }

  login(){
    // if(user.email)
    console.log("login component before service call")
    console.log(this.user)
    this._LoginRegistrationService.login(this.user)
    .then((data)=>{
      if(data.login){
        alert("success")
        Cookie.set("logged_id", data.user._id)
      }else{
        alert(data.error)
      }
    })
  }

}
