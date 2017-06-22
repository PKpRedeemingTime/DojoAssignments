import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class LoguserService {

  constructor(private _http:Http) { }

  create(user) {
    return this._http.post('/user', user)
    .map( data => data.json())
    .toPromise();
  }

  login(user) {
    return this._http.post
  }

  success() {
    return this._http.get('/success')
    .map( data => data.json())
    .toPromise();
  }

}
