import { Component, OnInit } from '@angular/core';
import { CustomersService } from "app/customers.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer = {name:""};
  customers = [];
  dupe = false;
  constructor(private _CustomersService:CustomersService , private _router:Router) { 
    console.log("starting customer get request")
    this._CustomersService.getAll()
    .then((data)=>{
      console.log("returning customer get request")
      console.log(data)
      this.customers = data
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  ngOnInit() {
  }

  addCustomer() {
    console.log("in customers component/add");
    console.log(this.customer);
    this._CustomersService.create(this.customer)
    .then( customer => { console.log("back in my customers component/add");
      console.log(customer);
      this.customer = {name:""};
      this.getAll();
    } )
    .catch(err => {this.dupe = true;
    console.log(err);
    })
  }

  deleteCustomer(id) {
    console.log("in customers component/delete");
    console.log(id);
    this._CustomersService.deleteCustomer(id)
    .then( customer => { console.log("back in my customers component/add");
    this.getAll();
    } )
    .catch(err => console.log(err))
  }

  getAll() {
    console.log("inside getAll customers component");
    this._CustomersService.getAll()
    .then((data)=>{
      console.log("returning customer get request")
      console.log(data)
      this.customers = data
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}
