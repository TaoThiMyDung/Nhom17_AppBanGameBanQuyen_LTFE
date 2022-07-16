import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routers: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: '/products'},
  { path: '', pathMatch: 'full', redirectTo: '/test' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routers)
  ]
})
export class AppRoutingModule { }
