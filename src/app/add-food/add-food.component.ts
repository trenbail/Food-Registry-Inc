import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../shared/api.service'

import {NgForm} from '@angular/forms'
@Component({
   selector: 'add-food',
  templateUrl: 'add-food.component.html'
})
export class AddFoodComponent implements OnInit {

  addFood(nf:NgForm){
    this.apiS.post("/inventory/registerFood", nf.value, function(res) {console.log(res)})
    console.log("Food OBJECT =>", nf.value)
  }


  
  constructor(private apiS: APIService) {}

  ngOnInit() {
  }

}
