import { Injectable } from '@angular/core';
import {APIService} from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  constructor(private apiService: APIService) { }

  getUser(callback){
    this.apiService.get('/user/getUser', callback);
  }
}
