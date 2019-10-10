import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders.service';
import {Food} from '../shared/Food.model';

@Component({
  selector: 'app-requestorder',
  templateUrl: './requestorder.component.html',
  styleUrls: ['./requestorder.component.css']
})
export class RequestorderComponent implements OnInit {
  foodSubscriptions: any[];

  constructor(private orderService: OrdersService) { }

  ngOnInit() {

    this.orderService.getSubscribedFood((res) => {
      let keys = Object.keys(res);
      let temparr = [];
      for (let key of keys) {
        temparr.push(res[key]);
      }
      this.foodSubscriptions = temparr;
    });



  }


}
