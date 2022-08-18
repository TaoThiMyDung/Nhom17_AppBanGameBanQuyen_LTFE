import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import {Cart} from "../../models/cart";
import {Blog} from "../../models/blog";
import {BlogService} from "../../services/blog.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})

export class BlogDetailsComponent implements OnInit {

  totalMoney : number = 0 ;
  submited: boolean = false;
  id: number = 0;
  blogList : Array<Blog> = [];
  blog: Blog = new Blog();

  idNext : number = 0 ;

  constructor(private contSrv : ContactService,
              private blogSrv : BlogService,
              private route: Router,
              private _route: ActivatedRoute) { }

  today = new Date();
  date = this.today.getDate()+ '/' + (this.today.getMonth() + 1 )+ '/' + this.today.getFullYear();

  ngOnInit(): void {
    this.id = this._route.snapshot.params.id ;
    let idNew = this.id + 1;
    this.idNext =  idNew ;

    this.blogSrv.getOne(this.id).subscribe(data =>  {
      this.blog = data;
    });

    this.blogSrv.getblog().subscribe(data =>  {
      this.blogList = data;
    });

  }
  public onLoadBlog():void{
    location.reload();
  }

}
