import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-test',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponents implements OnInit {
  data: any[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(value => this.data = Object.entries(value).map(v => v[1]));
  }

}
