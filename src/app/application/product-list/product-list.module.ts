import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {ProductListComponent} from "./product-list.component";
import {ProductListRoutingModule} from "./product-list-routing.module";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ],
  exports: [
    ],
  providers: [
    ProductService
  ],

})
export class ProductListModule { }
