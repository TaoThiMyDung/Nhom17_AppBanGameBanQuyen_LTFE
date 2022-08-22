import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ListProductService} from "../../services/listproduct.service";

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})

export class ListProductComponent implements OnInit {

  totalMoney : number = 0 ;
  id : number = 0 ;
  submited: boolean = false;

  constructor(private contSrv : ListProductService,
              private route: Router) { }

  today = new Date();
  date = this.today.getDate()+ '/' + (this.today.getMonth() + 1 )+ '/' + this.today.getFullYear();

  contactCreate = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    topic: new FormControl(''),
    message: new FormControl(''),
    date: new FormControl(this.date),
  });

  ngOnInit(): void {
  }

  public onCreate(): void {
    this.submited = true ;

    if ( this.contactCreate.invalid){
      alert("Please continue to travel with information")
      return;

    }else {
        // this.contSrv.create(this.contactCreate.value).subscribe(data =>{
        //   if (confirm("Add List Product Success")) {
        //     location.reload();
        //   }
        // });

    }
  }

}
