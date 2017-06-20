import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductIndexComponent },
  { path: 'new', component: ProductNewComponent },
  { path: 'create', component: ProductCreateComponent },
  { path: 'show', component: ProductShowComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'update/:id', component: ProductUpdateComponent },
  { path: 'delete:id', component: ProductDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
