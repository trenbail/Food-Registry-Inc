import { Injectable } from '@angular/core';
import { APIService } from '../shared/api.service';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private apiService: APIService) { }


  getSubscribedFood(callback): any {
    this.apiService.get('/inventory/getSubscribedFood', callback);
  }

  getSubscribedCarePackages(callback) {
    this.apiService.get('/inventory/getSubscribedCarePackages', callback);
  }


}
