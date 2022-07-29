import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {BannerService} from "../../services/banner.service";
import {Banner} from "../../models/banner";
import {Product} from "../../models/product";

@Component({
  selector: 'app-test',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponents implements OnInit {

  data: any[];

  // constructor(private productService:ProductService) { }
  //
  // ngOnInit(): void {
  //   this.productService.getProducts()
  //     .subscribe(value => this.data = Object.entries(value).map(v => v[1]));
  // }

  banners : Array<Banner> = new Array<Banner>();
  products : Array<Product> = new Array<Product>();
  productsList : Array<Product> = [];

  constructor(private bannerService:BannerService ,
              private productService:ProductService,
              private prodSrv : ProductService) { }

  ngOnInit(): void {
    // LAY DU LIEU VAO TRANG HOME
    this.bannerService.getBanners()
      .subscribe(res => {
        this.banners = res;
      });
    this.productService.getProduct()
      .subscribe(res => {
        this.products = res;
      });

    // PHU THUOC VAO TRANG SERVE
    this.prodSrv.getList().subscribe(data =>{
      this.productsList = data ;
    })
  }
}
