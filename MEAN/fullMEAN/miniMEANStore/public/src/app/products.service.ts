import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private _Http:Http) { }

  getAll(){
    console.log("inside service for get request")
    return this._Http.get('/products')
    .map((data)=>{
      console.log(data)
      return data.json()
    })
    .toPromise()
  }

  create(product) {
    console.log("inside product service/add");
    console.log(product);
    return this._Http.post('/products', product)
    .map((data)=>{
      console.log("back inside my service")
      console.log(data);
      return data.json()
    })
    .toPromise()
  }

}
