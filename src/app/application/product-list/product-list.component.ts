import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {FormControl, FormGroup} from "@angular/forms";
import {Cart} from "../../models/cart";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product> = [];
  cartList: Array<Cart> = [];

  constructor(private proSrv : ProductService,
              private cartSrv : CartService) { }

  public searchForm = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    sale_price : new FormControl(),
  });

  ngOnInit(): void {
    this.proSrv.getList(3).subscribe(data =>  {
      this.productList = data;
    });
    this.cartSrv.getCart().subscribe(data =>  {
      this.cartList = data;
    })
  }
  onDelete(id:number){
    if (confirm("Do you want to delete the product?")){
      this.proSrv.delete(id).subscribe(data =>{
        // Load data
        // Sửa đổi mặc định trong _limit = 4 => _limit = 10
        this.proSrv.getList().subscribe(data =>  {
          this.productList = data;
        })
      })
    }
  }
  onEdit(pro:any){

  }
  onSearch(){
    // alert(this.searchForm.value.name);
    this.proSrv.getList(10 , this.searchForm.value.name).subscribe(data =>  {
      this.productList = data;
    })
  }
}
