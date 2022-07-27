import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor() { }
       productFormCreate: FormGroup = new FormGroup({
         name : new FormControl(),
         price : new FormControl(),
         sale_price : new FormControl(),
         image : new FormControl()
       });

  ngOnInit(): void {
  }

}
