import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routers: Routes = [
  // Them duong dan link toi trang ts
<<<<<<< HEAD
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  {path: '', pathMatch: 'full', redirectTo: '/test' },
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '', pathMatch: 'full', redirectTo: '/product-list'},
  {path: '', pathMatch: 'full', redirectTo: '/productDetail/:id'},
  {path: '', pathMatch: 'full', redirectTo: '/product-create' },
  {path: '', pathMatch: 'full', redirectTo: '/product-edit/:id'},
  {path: '', pathMatch: 'full', redirectTo: '/checkout'},
  {path: '', pathMatch: 'full', redirectTo: '/contact'},
  {path: '', pathMatch: 'full', redirectTo: '/blog'},
  {path: '', pathMatch: 'full', redirectTo: '/blogDetails/:id'},
  {path: '', pathMatch: 'full', redirectTo: '/listproduct'},
  {path: '', pathMatch: 'full', redirectTo: '/steamproduct'},
  {path: '', pathMatch: 'full', redirectTo: '/originproduct'},

=======
>>>>>>> fc4c66f58f818c3ac5443ac66c8744b4e222f931

  // {path: '', pathMatch: 'full', redirectTo: '/products'},
  // {path: '', pathMatch: 'full', redirectTo: '/test' },
  {path: '', pathMatch: 'full', redirectTo: '/home'},

  // {path: '', pathMatch: 'full', redirectTo: '/product-list'},
  // {path: '', pathMatch: 'full', redirectTo: '/productDetail/:id'},
  // {path: '', pathMatch: 'full', redirectTo: '/product-create' },
  // {path: '', pathMatch: 'full', redirectTo: '/product-edit/:id'},
  // {path: '', pathMatch: 'full', redirectTo: '/checkout'},
  // {path: '', pathMatch: 'full', redirectTo: '/contact'},
  // {path: '', pathMatch: 'full', redirectTo: '/blog'},
  // {path: '', pathMatch: 'full', redirectTo: '/blogDetails/:id'},
  // {path: '', pathMatch: 'full', redirectTo: '/listproduct'},
  // {path: '', pathMatch: 'full', redirectTo: '/steamproduct'},
  // {path: '', pathMatch: 'full', redirectTo: '/login'},
  // {path: '', pathMatch: 'full', redirectTo: '/register'},
  // {path: '', pathMatch: 'full', redirectTo: '/cow'},
  // {path: '', pathMatch: 'full', redirectTo: '/dog'},
  // {path: '', pathMatch: 'full', redirectTo: '/cat'},
];

const child: Routes = [
  // Them duong dan link toi trang ts
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  {path: '', pathMatch: 'full', redirectTo: '/test' },
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '', pathMatch: 'full', redirectTo: '/product-list'},
  {path: '', pathMatch: 'full', redirectTo: '/productDetail/:id'},
  {path: '', pathMatch: 'full', redirectTo: '/product-create' },
  {path: '', pathMatch: 'full', redirectTo: '/product-edit/:id'},
];

// THAY LAM
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routers),
    // RouterModule.forRoot(child)
  ]
})

// @NgModule({
//    imports: [RouterModule.forRoot(routers)],
//    exports: [RouterModule]
// })

export class AppRoutingModule { }
