import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../home.component";
import {HomeComponentRoutingModule} from "./home.component-routing.module";
// import {ProductService} from "../../../services/product.service";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeComponentRoutingModule
  ],
  exports: [
  ],
  // providers: [
  //   ProductService
  //
  // ],

})
export class TestModule { }
