import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {SearchProductComponent} from "./searchproduct.component";
import {SearchProductRoutingModule} from "./searchproduct-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    SearchProductRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [
    ProductService
  ],

})
export class SearchProductModule { }
