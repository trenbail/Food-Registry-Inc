import { Component, OnInit, Input } from '@angular/core';

import {NgForm} from '@angular/forms'
@Component({
   selector: 'add-carepackage',
  templateUrl: 'add-carepackage.component.html'
})
export class AddCarePackageComponent implements OnInit {

  carepackage: any[] = []

  addCarePackage(nf:NgForm){
    this.carepackage.push(nf.value.carepackagename,
      nf.value.description,
      nf.value.type,
      nf.value.items,
      nf.value.quantity)

    console.log("CarePackage Added!!!", this.carepackage)
  }


  constructor() {}

  ngOnInit() {
  }

}
