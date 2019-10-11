import { Injectable } from '@angular/core';
import { APIService } from '../shared/api.service';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private apiService: APIService) { }

  fulfillOrder(orderNo: number, callback: (response) => void) {
    this.apiService.post('/orders/fulfillOrder/' + orderNo, null, callback);
  }

  getOpenOrders(callback: (response) => void) {
    this.apiService.get('/orders/getOpenOrders', callback);
  }

  getSubscribedFood(callback): any {
    this.apiService.get('/inventory/getSubscribedFood', callback);
  }

  getSubscribedCarePackages(callback) {
    this.apiService.get('/inventory/getSubscribedCarePackages', callback);
  }


}
