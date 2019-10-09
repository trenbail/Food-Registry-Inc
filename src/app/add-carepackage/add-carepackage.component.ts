import { Component, OnInit, Input } from '@angular/core';

import {NgForm} from '@angular/forms'
@Component({
   selector: 'add-carepackage',
  templateUrl: 'add-carepackage.component.html'
})
export class AddCarePackageComponent implements OnInit {


  addCarePackage(nf:NgForm){ 
    console.log("CarePackage Added!!!", nf.value)
  }


  constructor() {}

  ngOnInit() {
  }

}
