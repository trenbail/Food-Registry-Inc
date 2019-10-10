import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-requestorder',
  templateUrl: './requestorder.component.html',
  styleUrls: ['./requestorder.component.css']
})
export class RequestorderComponent implements OnInit {
  foodSubscriptions: any[];

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.getSubscribedFood();

  }

}
