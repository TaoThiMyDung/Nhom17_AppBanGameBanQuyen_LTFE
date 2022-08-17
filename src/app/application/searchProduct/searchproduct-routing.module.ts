import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchProductComponent} from "./searchproduct.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'searchProduct', component: SearchProductComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SearchProductRoutingModule { }

