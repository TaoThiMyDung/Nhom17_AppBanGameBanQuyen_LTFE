import {NgModule} from '@angular/core';
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";

const _api = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: any[];

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(_api + 'product');
  }
/*
Danh sach
GET : http://localhost:3000/product
 */
  getList(): Observable<any>{
    return this.http.get<any> ('http://localhost:3000/product');
  }
  /*
  Them moi
  POST : http://localhost:3000/product
   */
  create(data: any): Observable<any>{
    return this.http.post<any> ('http://localhost:3000/product/' , data);
  }

  // GET/:id: http://localhost:3000/product/1
  getOne(id: number): Observable<any>{
    return this.http.get<any> ('http://localhost:3000/product/' + id);
  }

  // PUT/:id: http://localhost:3000/product/1
  update(id: number, data: any): Observable<any>{
    return this.http.put<any> ('http://localhost:3000/product/' + id , data);
  }

  // DELETE/:id: http://localhost:3000/product/1
  delete(id: number): Observable<any>{
    return this.http.delete<any> ('http://localhost:3000/product/' + id);
  }

  private getData(url: string, header: object = {}): Observable<any> {
    return this.http.get<any[]>(url, header);
  }

  getProducts(): Observable<any[]> {
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
