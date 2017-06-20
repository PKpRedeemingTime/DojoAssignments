import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product.service";
import { Product } from '../product';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products = [];
  product = new Product();
  title = "";
  cost = 0;
  picture = "";
  idx= 0;
  constructor(private _ProductService:ProductService, private _Router:Router, private _ActivatedRoute:ActivatedRoute, private _router:Router) {
    this._ActivatedRoute.params.subscribe(param => {
      this.idx = param.id;
      this.product = this._ProductService.getOneProduct(param.id);
      if(!this.product){
        this.product = new Product();      
      }
    })
   }
  ngOnInit() {
    this.title = this.product.product;
    this.cost = this.product.price;
    this.picture = this.product.image;
  }
  update(product, price, image) {
    this._ProductService.update(product, price, image, this.idx);
    this._router.navigate(['/show']);
  }
  delete(idx) {
    this._ProductService.delete(this.idx);
    this._router.navigate(['/show']);
  }

}
