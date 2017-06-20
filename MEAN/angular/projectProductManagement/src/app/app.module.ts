import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from "app/product.service";
import { AppComponent } from './app.component';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductIndexComponent,
    ProductNewComponent,
    ProductCreateComponent,
    ProductShowComponent,
    ProductEditComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
