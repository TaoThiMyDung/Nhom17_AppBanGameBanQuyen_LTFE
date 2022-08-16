import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cart} from "../../models/cart";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {BillingService} from "../../services/billing.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckOutComponent implements OnInit {

  productList: Array<Product> = [];
  cartList: Array<Cart> = [];
  totalMoney : number = 0 ;

  submited: boolean = false;

  constructor(private proSrv : ProductService,
              private cartSrv : CartService,
              private billSrv : BillingService,
              private route: Router) { }

  billingCreate = new FormGroup({

    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormControl(),
    postCode: new FormControl(),
    phone: new FormControl(),
    email : new FormControl(),
    paymentMethods: new FormControl(),
    orderDate: new FormControl(),
    receiptDate : new FormControl(),
    totalMoney : new FormControl(),

  });

  ngOnInit(): void {

    this.proSrv.getList(3).subscribe(data =>  {
      this.productList = data;
    });

    this.cartSrv.getCart().subscribe(data =>  {

      this.cartList = data;

      // CART TOTAL
      for (const datum of this.cartList) {
        this.totalMoney += datum.price * datum.quantitySold
      }
      this.billingCreate = new FormGroup({

        firstName: new FormControl(),
        lastName: new FormControl(),
        address: new FormControl(),
        postCode: new FormControl(),
        phone: new FormControl(),
        email : new FormControl(),
        paymentMethods: new FormControl(),
        orderDate: new FormControl(Date.now()),
        receiptDate : new FormControl(Date.now()),
        totalMoney : new FormControl(this.totalMoney),

      });
    })
  }

  public onCreate(): void {
    this.submited = true ;
    if ( this.billingCreate.invalid){
      return;
    }else {
      this.billSrv.create(this.billingCreate.value).subscribe(data =>{
        if (confirm("Add Order Success")) {
          this.route.navigate(['/home']);
        }
      });
    }
  }

}
