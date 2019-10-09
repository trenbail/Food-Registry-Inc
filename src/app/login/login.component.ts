import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onSubmit(nf:NgForm){
    this.api.login(nf.value,(response)=>{});
  }

  constructor(private api:APIService) { }

  ngOnInit() {
  }

}
