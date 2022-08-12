import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../models/product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  category: string = "";
  submited: boolean = false;

  // Doi Tuong Product Duoc Bam Vao
  pro: Product = new Product(); // any ( Nhan Tat Ca Cac Du Lieu )
  relatedProduct: Array<Product> = new Array<Product>();
  related: Array<Product> = new Array<Product>();

  constructor(private prodSrv: ProductService,
              private cartdSrv: CartService,
              private _route: ActivatedRoute,
              private productService: ProductService,
              private route: Router) {
  }

  today = new Date();

  cartForm: FormGroup = new FormGroup({
  });
  cartFormOneQuantity: FormGroup = new FormGroup({
  });

  ngOnInit(): void {
    // LAY DU LIEU TREN THANH TIM KIEM
    // /productDetail/1 => id = 1
    this.id = this._route.snapshot.params.id ;
    this.category = this._route.snapshot.params.category ;

    this.prodSrv.getOne(this.id).subscribe(data =>{
      this.pro = data ;

      this.cartForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(this.pro.name),
        image: new FormControl(this.pro.image),
        price: new FormControl(this.pro.price),
        quantitySold: new FormControl(),
      });
      this.cartFormOneQuantity = new FormGroup({
        id: new FormControl(),
        name: new FormControl(this.pro.name),
        image: new FormControl(this.pro.image),
        price: new FormControl(this.pro.price),
        quantitySold: new FormControl(1),
      });


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

  public onCreate(): void {

    this.submited = true;
    if (this.cartForm.invalid) {
      return;
    } else {
      this.cartdSrv.create(this.cartForm.value).subscribe(data => {
        if (confirm("Add To Cart Success")) {
          this.route.navigate(['/product-list']);
        }
      });
    }
  }
  public onCreateOneQuantity (): void {

    this.submited = true;
    if (this.cartFormOneQuantity.invalid) {
      return;
    } else {
      this.cartdSrv.create(this.cartFormOneQuantity.value).subscribe(data => {
        if (confirm("Add To Cart Success")) {
          this.route.navigate(['/product-list']);
        }
      });
    }
  }
}
