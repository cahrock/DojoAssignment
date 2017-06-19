import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  _url: string = 'https://api.github.com/users/';
  retrieveGithubAPI(username) {
    return this._http.get(this._url+ username).map(data=>data.json()).toPromise()
  }

}
