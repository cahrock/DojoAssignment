import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class LoginRegistrationService {

  constructor(private _Http:Http) { }

  registerUser(user){
    console.log("in service before http call")
    console.log(user)
    return this._Http.post('/users', user)
    .map((data)=>{
      console.log("inside service after http call")
      console.log("data", data)
      return data.json()
    })
    .toPromise();
  }
  login(user){
    console.log("inside my service before http call")
    console.log(user)
    return this._Http.post('/login', user)
    .map((data)=>{
      console.log("inside service after http call")
      console.log(data)
      return data.json()
    })
    .toPromise();
  }
}
