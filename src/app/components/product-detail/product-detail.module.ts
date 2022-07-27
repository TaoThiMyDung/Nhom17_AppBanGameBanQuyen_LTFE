import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {ProductDetailRoutingModule} from "./product-detail-routing.module";
import {ProductDetailComponent} from "./product-detail.component";


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ],
  exports: [
    ],
  providers: [
    ProductService
  ],

})
export class ProductDetailModule { }
