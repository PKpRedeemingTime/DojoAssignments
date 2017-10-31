import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class UsersService {

  constructor(private _Http:Http) { }

  create(user) {
    console.log("inside user service/add");
    console.log(user);
    return this._Http.post('/users', user)
    .map((data)=>{
      console.log("back inside my service")
      console.log(data);
      return data.json()
    })
    .toPromise()
  }

}
