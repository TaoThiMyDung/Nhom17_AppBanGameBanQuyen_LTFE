import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0 ;
  // Doi Tuong Product Duoc Bam Vao
  pro : Product = new Product(); // any ( Nhan Tat Ca Cac Du Lieu )
  relatedProduct : Array<Product> = new Array<Product>();

  constructor(private  prodSrv : ProductService ,
              private _route :ActivatedRoute,
              private productService:ProductService) { }
  today = new Date();
  cartForm : FormGroup = new FormGroup({
    quantity : new FormControl()
  });

  ngOnInit(): void {
    // LAY DU LIEU TREN THANH TIM KIEM
    // /productDetail/1 => id = 1
    this.id = this._route.snapshot.params.id ;

    this.prodSrv.getOne(this.id).subscribe(data =>{
      this.pro = data ;
    })
    this.productService.getRelatedProduct()
      .subscribe(res => {
        this.relatedProduct = res;
      });
  }
}
