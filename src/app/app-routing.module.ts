import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routers: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: '/products'},
  // { path: '', pathMatch: 'full', redirectTo: '/test' },
  // Them duong dan link toi trang ts
  {path: '', pathMatch: 'full', redirectTo: '/home'},
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
