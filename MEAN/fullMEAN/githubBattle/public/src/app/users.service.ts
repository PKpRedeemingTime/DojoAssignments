import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class UsersService {

  constructor(private _http:Http) { }

  create(gitdata) {
    return this._http.post('/users', gitdata)
    .map( data => data.json())
    .toPromise();
  }

}
