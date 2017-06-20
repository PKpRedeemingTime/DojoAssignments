import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
  ProductObservable = new BehaviorSubject(null)
  product = new Product();
  products = [];
  count = 0;
  idx = 0;
  constructor() { }
  getProducts(){
    return this.products;
  }
  getOneProduct(id){
    return this.products[id];
  }
  create(event) {
    this.count++;
    this.product = new Product(event.product, event.price, event.image);
    this.product.id = this.count;
    this.products.push(this.product);
    this.product = new Product(); 
  }
  update(product, price, image, idx) {
    this.products[idx].product = product.model;
    this.products[idx].price = price.model;
    this.products[idx].image = image.model;
  }
  delete(idx) {
    this.products.splice(idx,1)
  }

}
