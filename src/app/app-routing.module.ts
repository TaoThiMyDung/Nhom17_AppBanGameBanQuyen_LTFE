import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routers: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: '/products'},
  // { path: '', pathMatch: 'full', redirectTo: '/test' },
  // Them duong dan link toi trang ts
  { path: '' ,  pathMatch: 'full', redirectTo : '/Home'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routers)
  ]
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routers)
  ]
})

export class AppRoutingModule { }
