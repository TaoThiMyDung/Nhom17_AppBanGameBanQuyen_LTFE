import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {ProductCreateRoutingModule} from "./product-create-routing.module";
import {ProductCreateComponent} from "./product-create.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductCreateRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ],
  providers: [
    ProductService
  ],

})
export class ProductCreateModule { }
