import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {ProductEditRoutingModule} from "./product-edit-routing.module";
import {ProductEditComponent} from "./product-edit.component";


@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductEditRoutingModule
  ],
  exports: [
    ],
  providers: [
    ProductService
  ],

})
export class ProductEditModule { }
