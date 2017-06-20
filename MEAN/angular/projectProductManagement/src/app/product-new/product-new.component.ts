import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/product.service";
import { Router } from "@angular/router";
import { Product } from '../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  constructor(private _ProductService:ProductService , private _router:Router) { }
  ngOnInit() {
  }
  createProduct(event) {
    this._ProductService.create(event);
    this._router.navigate(['/show']);
  }

}
