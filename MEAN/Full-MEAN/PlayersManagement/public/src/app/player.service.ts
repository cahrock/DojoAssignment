import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs'

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  create(player){
      console.log()
      console.log(player)
      return this._http.post('/players', player)
      .map(data =>{
          console.log("back inside my service")
          console.log(data)
          return data.json()
      })
      .toPromise()
  }

  getAll(){
      console.log("Inside service getAll()")

      return this._http.get('/players')
      .map((data)=>{
          console.log(data)
          return data.json()
      })
      .toPromise()
  }
  delete(id){
   console.log("inside service for delete")
   console.log(`/players/${id}`)
   return this._http.delete(`/players/${id}`)
   .map((data)=>{
     console.log(data)
   })
   .toPromise();
 }
}
