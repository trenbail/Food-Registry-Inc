import { Injectable } from '@angular/core';
import { APIService } from '../shared/api.service';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  foodSubscriptions: any[];

  constructor(private apiService: APIService) { }


  getSubscribedFood(): any {
    return this.apiService.get('/inventory/getSubscribedFood', (res => {
      let temparr = [];
      let keys = Object.keys(res);
      for (let key of keys) {
        temparr.push(res[key]);
    }
      return temparr;
    }));
  }


}
