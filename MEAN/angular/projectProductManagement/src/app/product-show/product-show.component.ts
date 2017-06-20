import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product.service";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  products = [];
  url = "";
  constructor(private _ProductService:ProductService) { 
    this.products = this._ProductService.getProducts();
  }
  ngOnInit() {
  }
  
}
