import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import {NgForm} from '@angular/forms'
@Component({
   selector: 'add-carepackage',
  templateUrl: 'add-carepackage.component.html'
})
export class AddCarePackageComponent implements OnInit {

  addCarePackage(nf:NgForm){

    this.hc.post("http://18.221.215.81:3000/inventory/registerFood",nf.value,{headers:{"Content-Type":"application/json"}})
    .subscribe((res) => {
      console.log(res)
    });

    console.log("care package OBJECT =>", nf.value)
  }


  constructor(private hc: HttpClient) {}

  ngOnInit() {
  }

}
