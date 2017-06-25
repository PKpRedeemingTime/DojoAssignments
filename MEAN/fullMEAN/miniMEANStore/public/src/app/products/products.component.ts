import { Component, OnInit } from '@angular/core';
import { ProductsService } from "app/products.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = {name:"", image:"", description:"", quantity:0};
  products = [];
  picture = "";
  constructor(private _ProductsService:ProductsService , private _router:Router) { 
    this._ProductsService.getAll()
    .then((data)=>{
      console.log("returning product get request")
      console.log(data)
      this.products = data
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }

  addProduct() {
    console.log("in products component/add");
    console.log(this.product);
    this._ProductsService.create(this.product)
    .then( product => { console.log("back in my products component/add");
      console.log(product);
      this.picture = product.image;
      this.product = {name:"", image:"", description:"", quantity:0};
      this.getAll();
    } )
    .catch(err => {console.log(err)})
  }

  getAll() {
    console.log("inside getAll customers component");
    this._ProductsService.getAll()
    .then((data)=>{
      console.log("returning product get request")
      console.log(data)
      this.products = data
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
