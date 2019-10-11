import { Component, OnInit } from '@angular/core';
import {LandingService} from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: any;
  date: Date = new Date();
  constructor(private landingService: LandingService) { }
  ngOnInit() {
    this.landingService.getUser((response) => {
      this.user = response;
    });
  }

}
