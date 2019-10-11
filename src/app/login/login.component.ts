import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;


  onSubmit(nf:NgForm){
    this.ls.login(nf.value, (response) => {
      if(response.success){
        this.router.navigate(['/landing']);
      } else {
        this.error = response.error;
        console.log(this.error);
      }
    });
  }

  constructor(private ls:LoginService,private router: Router) { }

  ngOnInit() {
  }

}
