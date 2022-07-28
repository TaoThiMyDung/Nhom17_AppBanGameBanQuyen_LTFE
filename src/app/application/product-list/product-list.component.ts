import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Array<any> = [];

  constructor(private proSrv : ProductService) { }

  ngOnInit(): void {
    this.proSrv.getList().subscribe(data =>  {
      this.productList = data;
    })
  }
  onDelete(id:number){
    if (confirm("Do you want to delete the product?")){
      this.proSrv.delete(id).subscribe(data =>{
        // Load data
        this.proSrv.getList().subscribe(data =>  {
          this.productList = data;
        })
      })
    }
  }
  onEdit(pro:any){

  }
}
