import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'fillorder',
  templateUrl: './fillorder.component.html',
  styleUrls: ['./fillorder.component.css']
})
export class FillOrderComponent implements OnInit {
  openOrders = [];

  fulfillOrder(orderNo: number) {
    this.os.fulfillOrder(orderNo, (response) => {
      console.log(response);
      if (response.success) {
        for (let order of this.openOrders) {
          if (order.orderno == orderNo)
            order.newlyFulfilled = true;
        }
      }
    });
  }

  constructor(private os: OrdersService) { }

  ngOnInit() {
    this.os.getOpenOrders((response) => {
      for (let key of Object.keys(response)) {
        let order = response[key];
        order.newlyFulfilled = false;
        let temparr = [];
        for (let subkey of Object.keys(order.items)) {
          temparr.push(order.items[subkey]);
        }
        order.items = temparr;
        this.openOrders.push(order);
      }
    });
  }
}
