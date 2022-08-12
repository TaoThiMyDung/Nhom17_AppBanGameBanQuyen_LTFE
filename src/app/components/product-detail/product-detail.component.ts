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
  category :string = "";

  // Doi Tuong Product Duoc Bam Vao
  pro : Product = new Product(); // any ( Nhan Tat Ca Cac Du Lieu )
  relatedProduct : Array<Product> = new Array<Product>();
  related : Array<Product> = new Array<Product>();

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
    this.category = this._route.snapshot.params.category ;

    this.prodSrv.getOne(this.id).subscribe(data =>{
      this.pro = data ;
    })
    this.prodSrv.getOne(this.id).subscribe(data =>{
      this.category = data.category;
      this.productService.getRelatedProduct(4,this.category)
      .subscribe(res => {
        this.relatedProduct = res;
       })
      });
        this.prodSrv.getOne(this.id).subscribe(data =>{
          this.category = data.category;
          this.productService.getRelated(this.category)
            .subscribe(res => {
              this.related = res;
              // alert(this.category)
        })
      });
  }
}
