import {NgModule} from '@angular/core';
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: any[];

  constructor(private http: HttpClient) {
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
