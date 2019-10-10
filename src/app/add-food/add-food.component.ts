import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http'


import {NgForm} from '@angular/forms'
@Component({
   selector: 'add-food',
  templateUrl: 'add-food.component.html'
})
export class AddFoodComponent implements OnInit {

  addFood(nf:NgForm){
    nf.value["members"] = {} 
    this.hc.post("http://18.221.215.81:3000/inventory/registerFood",nf.value,{headers:{"Content-Type":"application/json"}})
    .subscribe((res) => {
      console.log(res)
    });

    console.log("Food OBJECT =>", nf.value)
  }


  
  constructor(private hc: HttpClient) {}

  ngOnInit() {
  }

}
