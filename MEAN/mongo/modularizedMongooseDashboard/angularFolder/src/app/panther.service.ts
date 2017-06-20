import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class PantherService {

  constructor(private _http:Http) { 
    
  }

  get() {
    console.log("inside get");
    return this._http.get('/panthers').map(res=>res.json()).toPromise();
  }

}
