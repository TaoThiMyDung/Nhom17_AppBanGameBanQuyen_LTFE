import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {Cart} from "../models/cart";

const _api = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: any[];

  constructor(private http: HttpClient) {}

  getCart(): Observable<Array<Cart>>{
    return this.http.get<Array<Cart>>(_api + 'cart');
  }

  /*
  Danh sach
  GET : http://localhost:3000/product
   */
  // getList(_limit : number = 4): Observable<Array<Product>>{ // Mặc định hiển thị 4 sản phẩm
  //   return this.http.get<Array<Product>> ('http://localhost:3000/product/?_limit='+ _limit + '&_sort=id&_order=desc');
  // => Hiển thị 2 sản phẩm trong danh sách sản phẩm ( ?_limit=2 )
  // => Sắp xếp theo id ( _sort=id )
  // => Theo thứ tự giảm dần của id ( _order=desc )
  // return this.http.get<Array<Product>> ('http://localhost:3000/product');
  // }
  /*
     http://localhost:3000/product/?_limit=3&_page=1 => 1 2 3 ( Hiển thị 3 sản phẩm đầu tiên ) => PHÂN TRANG TÌM KIẾM ( CHUYỂN XEM CÁC KHUNG SẢN PHẨM KHÁC )
     http://localhost:3000/product/?_limit=3&_page=2 => 4 5 6 ( Hiển thị 3 sản phẩm tiếp theo )
   */
  getList (_limit : number = 4, search_key:any = null): Observable<Array<Cart>>{ // Mặc định hiển thị 4 sản phẩm ( _limit = 4 , search_key có hoặc không )
    let url = 'http://localhost:3000/cart/?_limit='+ _limit + '&_sort=id&_order=desc';
    if ( search_key != null ){
      url += '&name_like=' + search_key; // Tìm kiếm theo tên có xuất hiện trong tên sản phẩm
    }
    return this.http.get<Array<Cart>> (url);
  }

  getRelatedCart  (_limit : number = 4 , like_key: string): Observable<Array<Cart>>{ // Mặc định hiển thị 4 sản phẩm ( _limit = 4 , search_key có hoặc không )

    // http://localhost:3000/product?category_like=game

    let url = 'http://localhost:3000/cart/?_limit='+ _limit + '&category_like=' + like_key;
    return this.http.get<Array<Cart>> (url);
  }
  getRelated  (like_key: string): Observable<Array<Cart>>{ // Mặc định hiển thị 4 sản phẩm ( _limit = 4 , search_key có hoặc không )
    // http://localhost:3000/product?category_like=game

    let url = 'http://localhost:3000/product/?category_like='+ like_key;
    return this.http.get<Array<Cart>> (url);
  }
  /*
  Them moi
  POST : http://localhost:3000/product
   */
  create(data: any): Observable<any>{
    return this.http.post<any> ('http://localhost:3000/cart/' , data);
  }

  // GET/:id: http://localhost:3000/product/1
  getOne(id: number): Observable<Cart>{
    return this.http.get<Cart> ('http://localhost:3000/cart/' + id);
  }

  // PUT/:id: http://localhost:3000/product/1
  update(id: number, data: any): Observable<any>{
    return this.http.put<any> ('http://localhost:3000/cart/' + id , data);
  }

  // DELETE/:id: http://localhost:3000/product/1
  delete(id: number): Observable<any>{
    return this.http.delete<any> ('http://localhost:3000/cart/' + id);
  }

  private getData(url: string, header: object = {}): Observable<any> {
    return this.http.get<any[]>(url, header);
  }

  getCarts(): Observable<any[]> {
    // this.data =[
    //   [
    //     "43836", "East", "Jones", "Pencil", 95, 1.99, 189.05],
    //   ["43853", "Central", "Kivell", "Binder", 50, 19.99, 999.5],
    //   ["43870", "Central", "Jardine", "Pencil", 36, 4.99, 179.64],
    //   ["43887", "Central", "Gill", "Pen", 27, 19.99, 539.73],
    //    ["43905", "West", "Sorvino", "Pencil", 56, 2.99, 167.44],
    //   ["43922", "East", "Jones", "Binder", 60, 4.99, 299.4],
    //   ["43939", "Central", "Andrews", "Pencil", 75, 1.99, 149.25],
    //    ["43956", "Central", "Jardine", "Pencil", 90, 4.99, 449.1]
    // ];
    return this.getData('http://localhost:4200/assets/data.json');
    // .subscribe(value => {
    //   for (const [k, v] of Object.entries(value)) {
    //     this.data.push(v);
    //   }
    // });
    // return of(this.data);
  }
}
