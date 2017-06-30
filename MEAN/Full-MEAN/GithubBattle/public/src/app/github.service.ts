import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs';

@Injectable()
export class GithubService {
    constructor(private _http: Http) { }

    notes = {}
    _url: string = 'https://api.github.com/users/';
    get(username) {
      return this._http.get(this._url+ username)
      .map(data=>data.json())
      .toPromise()

    }
}
