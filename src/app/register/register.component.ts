import { Component, OnInit } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {RegisterService} from "../services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})


export class RegisterComponent implements OnInit {
  submited : boolean = false ;

  Fromregister = new FormGroup({
    email : new FormControl(""),
    password : new FormControl(""),
  });

  constructor(private  prodSrv : RegisterService ,
              private  route: Router) {}

  ngOnInit() {
  }

  public onregister(): void {
    this.submited = true ;
    if ( this.Fromregister.invalid){
      return;
    }else {
      this.prodSrv.getRegister().subscribe(data =>{
        for (const datum of data) {
          if(datum.email == this.Fromregister.controls.email.value && datum.password == this.Fromregister.controls.password.value){
            this.route.navigate(['/home']);
            return;
          }
        }
        if (confirm("Email or password error")) {
          this.route.navigate(['/register']);
        }
      });
    }
  }

}
