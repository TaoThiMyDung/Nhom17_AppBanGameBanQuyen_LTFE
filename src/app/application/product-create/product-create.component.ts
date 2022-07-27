import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private  prodSrv : ProductService) {
  }
     public productFormCreate = new FormGroup({
         name : new FormControl(),
         price : new FormControl(),
         sale_price : new FormControl(),
         image : new FormControl()
       });

  ngOnInit(): void {
  }
  public onCreate(): void {
    this.prodSrv.create(this.productFormCreate.value).subscribe(data =>{
      console.log(data);
    });
   }
}
