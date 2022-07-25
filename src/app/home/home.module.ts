import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {ProductService} from "../services/product.service";
import {HomeComponents} from "./test/home.component";


@NgModule({
  declarations: [
    HomeComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    ],
  providers: [
    ProductService
  ],

})
export class HomeModule { }
