import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIService } from '../shared/api.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  addUser(nf: NgForm) {
    //   console.log("User Added!", nf.value);
    this.apiS.post("/user/createProfile", nf.value, (res) => {
      console.log(res);
    });
  }

    constructor(private apiS: APIService) {}

    ngOnInit()
    {
    }

  }

