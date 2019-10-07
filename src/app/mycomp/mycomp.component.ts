import { Component, OnInit, Input } from '@angular/core';
import {UserData} from './shared/userdata.service';
import {DepartmentData} from './shared/departmentdata.service';
@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
   
    isFav=true;
    totalLikes=200;

  constructor(user:UserData, dep:DepartmentData) {
      this.users=user.loadUsers();
      this.departments=dep.loadDepartments();
  }
  @Input()
  myCity = "SA";
  propic = "http://cdn.akc.org/content/article-body-image/Hero.jpg";
  myImage = "";
  
  
  ngOnInit() {
  }
  users;
  departments;
  
  callme(){
      console.log('i am called')
  }
  shoppingList=[1.2]
}
