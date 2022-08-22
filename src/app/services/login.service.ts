import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../models/login";

const _api = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data: any[];

  constructor(private http: HttpClient) {}

  getlogin(): Observable<Array<Login>>{
    return this.http.get<Array<Login>>(_api + 'login');
  }
  getList (_limit : number = 4, search_key:any = null): Observable<Array<Login>>{ // Mặc định hiển thị 4 sản phẩm ( _limit = 4 , search_key có hoặc không )
    let url = 'http://localhost:3000/login/?_limit='+ _limit + '&_sort=id&_order=desc';
    if ( search_key != null ){
      url += '&name_like=' + search_key; // Tìm kiếm theo tên có xuất hiện trong tên sản phẩm
    }
    return this.http.get<Array<Login>> (url);
  }

  getSearchName (search_key: string): Observable<Array<Login>>{ // ( _limit = 4 , search_key có hoặc không )
    let url = 'http://localhost:3000/login/?name_like=' + search_key  ; // Tìm kiếm theo tên có xuất hiện trong tên sản phẩm
    return this.http.get<Array<Login>> (url);
  }

  getRelatedlogin  (_limit : number = 4 , like_key: string): Observable<Array<Login>>{ // Mặc định hiển thị 4 sản phẩm ( _limit = 4 , search_key có hoặc không )
    // http://localhost:3000/login?category_like=game

    let url = 'http://localhost:3000/login/?_limit='+ _limit + '&category_like=' + like_key;
    return this.http.get<Array<Login>> (url);
  }
  getRelated  (like_key: string): Observable<Array<Login>>{ // Mặc định hiển thị 4 sản phẩm ( _limit = 4 , search_key có hoặc không )
    // http://localhost:3000/login?category_like=game

    let url = 'http://localhost:3000/login/?category_like='+ like_key;
    return this.http.get<Array<Login>> (url);
  }
  /*
  Them moi
  POST : http://localhost:3000/login
   */
  create(data: any): Observable<any>{
    return this.http.post<any> ('http://localhost:3000/login/' , data);
  }

  // GET/:id: http://localhost:3000/login/1
  getOne(id: number): Observable<Login>{
    return this.http.get<Login> ('http://localhost:3000/login/' + id);
  }

  // PUT/:id: http://localhost:3000/login/1
  update(id: number, data: any): Observable<any>{
    return this.http.put<any> ('http://localhost:3000/login/' + id , data);
  }

  // DELETE/:id: http://localhost:3000/login/1
  delete(id: number): Observable<any>{
    return this.http.delete<any> ('http://localhost:3000/login/' + id);
  }

  private getData(url: string, header: object = {}): Observable<any> {
    return this.http.get<any[]>(url, header);
  }

  getlogins(): Observable<any[]> {
    return this.getData('http://localhost:4200/assets/data.json');
  }

}
