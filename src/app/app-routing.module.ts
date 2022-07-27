import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routers: Routes = [
  // Them duong dan link toi trang ts
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  {path: '', pathMatch: 'full', redirectTo: '/test' },
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '', pathMatch: 'full', redirectTo: '/product-list'},
  {path: '', pathMatch: 'full', redirectTo: '/product-detail'},
  {path: '', pathMatch: 'full', redirectTo: '/product-create' },
  // {path: '', pathMatch: 'full', redirectTo: 'product-edit/:id'},
  {path: '', pathMatch: 'full', redirectTo: 'product-edit'},
];

// THAY LAM
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routers)
  ]
})

// @NgModule({
//    imports: [RouterModule.forRoot(routers)],
//    exports: [RouterModule]
// })

export class AppRoutingModule { }
