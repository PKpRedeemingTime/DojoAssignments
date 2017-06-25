import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "app/index/index.component";
import { ProductsComponent } from "app/products/products.component";
import { OrdersComponent } from "app/orders/orders.component";
import { CustomersComponent } from "app/customers/customers.component";

const routes: Routes = [
  { path: '', pathMatch:'full', component:IndexComponent },
  { path: 'products', component:ProductsComponent },
  { path: 'orders', component:OrdersComponent },
  { path: 'customers', component:CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
