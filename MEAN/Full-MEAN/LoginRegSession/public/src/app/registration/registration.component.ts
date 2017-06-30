import { Component, OnInit } from '@angular/core';
import { LoginRegistrationService } from "app/login-registration.service";
// import { CookieService } from 'ng2-cookies/ng2-cookies';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = {email:"minh@nguyen.com", password:"1234567890", first_name:"MINH", last_name:"NGUYEN", birthday: "2017-06-21"}
  cpassword = "1234567890"
  // user = {email:"minh", password:"123456", first_name:"01343mfsd", last_name:"3423nasdf", birthday: new Date()}
  
  constructor(private _LoginRegistrationService:LoginRegistrationService, private _Router:Router) { 
    if(Cookie.check("logged_id")){
      this._Router.navigateByUrl('home')
    }
  }

  ngOnInit() {
  }

  register(){
    console.log(Date.now().toLocaleString())
    console.log(this.user)
    console.log(this.cpassword)
    if(this.user.password != this.cpassword){
      alert("password does not match")
    }else{
      this._LoginRegistrationService.registerUser(this.user)
      .then((data)=>{
        if(data.error){
          alert(data.messages)
        }else{
          console.log("inside register component")
          console.log(data)
          Cookie.set('logged_id', data.user._id)
          this._Router.navigateByUrl('home')
        }
        
      })
      .catch((err)=>{
        console.log("inside register component")
        console.log(err)
      })
    }
  }
}
