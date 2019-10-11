import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../shared/api.service'
import {NgForm} from '@angular/forms'
@Component({
   selector: 'add-carepackage',
  templateUrl: 'add-carepackage.component.html'
})
export class AddCarePackageComponent implements OnInit {

  addCarePackage(nf:NgForm){

    this.apiS.post("/inventory/registerCarePackage", nf.value, function(res) {console.log(res)})


    console.log("care package OBJECT =>", nf.value)
  }


  constructor(private apiS: APIService) {}

  ngOnInit() {
  }

}
