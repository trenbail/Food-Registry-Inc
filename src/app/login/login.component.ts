import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onSubmit(nf:NgForm){
    this.ls.login(nf.value,(response)=>{});
  }

  constructor(private ls:LoginService) { }

  ngOnInit() {
  }

}
