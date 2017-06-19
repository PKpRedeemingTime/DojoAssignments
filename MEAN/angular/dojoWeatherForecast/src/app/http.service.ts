import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveGitData(city) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=2489c7a708194d6016f71cd0cc48cf0d').map(data=>data.json()).toPromise()
  }

}
