import { Component } from '@angular/core';
import {Cart} from "./models/cart";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {Router} from "@angular/router";
import {Product} from "./models/product";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpService} from "./Shared/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //   <router-outlet></router-outlet>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mdb5-angular-ui-kit-pro-advanced';
  data: any[] =[];
  cartList: Array<Cart> = [];
  totalCart : number = 0 ;
  productList: Array<Product> = [];
  error : string;
  erro : string;

  public searchForm = new FormGroup({
    name : new FormControl(''),
    price : new FormControl(''),
    sale_price : new FormControl(''),
  });

  constructor(private proSrv : ProductService,
              private cartSrv : CartService,
              private route: Router,
              public http: HttpService) { }

  ngOnInit(): void {

    this.title = 'Hello World';
    this.data = [
      [1, 'Nguyễn Văn A', '18130000', 'DH18DT', 10],
      [2, 'Nguyễn Văn B', '18130000', 'DH18DT', 10],
      [3, 'Nguyễn Văn C', '18130000', 'DH18DT', 10],
      [4, 'Nguyễn Văn D', '18130000', 'DH18DT', 10],
      [5, 'Nguyễn Văn E', '18130000', 'DH18DT', 10],
      [6, 'Nguyễn Văn F', '18130000', 'DH18DT', 10],
      [7, 'Nguyễn Văn G', '18130000', 'DH18DT', 10],
      [8, 'Nguyễn Văn H', '18130000', 'DH18DT', 10],
      [9, 'Nguyễn Văn I', '18130000', 'DH18DT', 10],
    ];
    this.cartSrv.getCart().subscribe(data =>  {

      this.cartList = data;

      // CART TOTAL
      for (const datum of this.cartList) {
        this.totalCart += datum.quantitySold;
      }
    })
  }
  onSearch(id : number){
    // alert(this.searchForm.value.name);
    location.replace('../productDetail/' + id);
  }

  onProductSearch( ){
    // alert(this.searchForm.value.name);

    this.proSrv.getSearchName( this.searchForm.value.name).subscribe(data =>  {
      this.productList = data;
      // alert(data)
      if( data == null ){
        this.error = "There are no products matching your search ";
        this.erro = "You can try with simpler keywords or contact support";
      }
      this.error = "";
      this.erro = "";
    })

  }
}
