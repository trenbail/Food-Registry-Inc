import { Component, OnInit, Input } from '@angular/core';

import {NgForm} from '@angular/forms'
@Component({
   selector: 'add-food',
  templateUrl: 'add-food.component.html'
})
export class AddFoodComponent implements OnInit {


  addFood(nf:NgForm){ 
    console.log("Food Added!!!", nf.value)
  }


  constructor() {}

  ngOnInit() {
  }

}
