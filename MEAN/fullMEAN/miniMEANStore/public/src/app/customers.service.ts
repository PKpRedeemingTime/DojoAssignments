import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class CustomersService {

  constructor(private _Http:Http) { }

  create(customer) {
    console.log("inside customer service/add");
    console.log(customer);
    return this._Http.post('/customers', customer)
    .map((data)=>{
      console.log("back inside my service")
      console.log(data);
      return data.json()
    })
    .toPromise()
  }

  deleteCustomer(id) {
    console.log("inside customer service/delete");
    console.log(id);
    return this._Http.delete(`/customers/${id}`)
    .map((data)=>{
      console.log(' back inside customer service/delete');
      console.log(data);
    })
    .toPromise();
  }

  getAll(){
    console.log("inside service for get request")
    return this._Http.get('/customers')
    .map((data)=>{
      console.log(data)
      return data.json()
    })
    .toPromise()
  }

}
