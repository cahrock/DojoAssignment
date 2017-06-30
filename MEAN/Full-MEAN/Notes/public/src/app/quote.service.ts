import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs';

@Injectable()
export class QuoteService {
    //  private headers = new Headers({'Content-Type': 'application/json'});
    //  private heroesUrl = 'api/heroes';  // URL to web api

     constructor(private _http: Http) { }
     notes = {}
     get(){
         return this._http.get('/notes')
         .map(data => data.json())
         .toPromise()
     }
     create(note){
         console.log("create service app")
         return this._http.post('/notes', note)
         .map(data => data.json())
         .toPromise()
     }

}
