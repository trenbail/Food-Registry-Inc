import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders.service';
import {FormsModule , NgForm} from '@angular/forms';

@Component({
  selector: 'app-requestorder',
  templateUrl: './requestorder.component.html',
  styleUrls: ['./requestorder.component.css']
})
export class RequestorderComponent implements OnInit {
  foodSubscriptions: any[];
  carePackageSubscriptions: any[];

  constructor(private orderService: OrdersService) {
  }

  ngOnInit() {

    this.orderService.getSubscribedFood((res) => {
      let keys = Object.keys(res);
      let temparr = [];
      for (let key of keys) {
        temparr.push(res[key]);
      }
      this.foodSubscriptions = temparr;
    });

    this.orderService.getSubscribedCarePackages((res) => {
      let keys = Object.keys(res);
      let temparr = [];
      for (let key of keys) {
        temparr.push(res[key]);
      }
      this.carePackageSubscriptions = temparr;
    });
  }

  requestItems() {
    let temparr = [];

    for (let item of this.foodSubscriptions) {
      let object = {};
      if (item.value) {
        object["itemName"] = item.name;
        object["itemType"] = 'food';
        object['itemQuantity'] = item.value;
        temparr.push(object);
      }
    }

    for (let item of this.carePackageSubscriptions) {
      let object = {};
      if (item.value) {
        object["itemName"] = item.name;
        object["itemType"] = 'food';
        object['itemQuantity'] = item.value;
        temparr.push(object);
      }
    }
    this.orderService.requestOrder({items: temparr}, (res)=>{
      console.log(res);
    });

  }
}


