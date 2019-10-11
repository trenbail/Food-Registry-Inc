
import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../shared/api.service'

import {NgForm} from '@angular/forms'
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
   selector: 'view-inventory',
  templateUrl: 'view-inventory.component.html'
})
export class ViewInventoryComponent implements OnInit {
  
  carepackage;
  carepackages;
  food;
  foods;
  user

  constructor(private apiS: APIService) {
  }

  ngOnInit() {
    this.apiS.get("/inventory/getCarePackageInventory", (res) => {
        let temparr = [];
        this.carepackage = res;    
        Object.keys(this.carepackage).forEach(key => 
            {
                temparr.push(this.carepackage[key]) // the value of the current key.
            })
        this.carepackages = temparr;

        this.apiS.get("/user/getUser", (res) => {
            this.user = res

            let i = 0;
            for (let carepackage of this.carepackages){   
              let userFound = false;

              if(carepackage.members){
              Object.keys(carepackage.members).forEach(key => {
                  
                  if (key===this.user.userName)
                      userFound = true;
              })}
              if (userFound)
                  this.carepackages[i].userFound = true;
              else
                  this.carepackages[i].userFound = false;
              i++}
          })



        })
      this.apiS.get("/inventory/getFoodInventory", (res) => {
          let temparr = [];
          this.food = res;
          Object.keys(this.food).forEach(key => {
              temparr.push(this.food[key]) // the value of the current key.
          })
          this.foods = temparr;
          
          
          this.apiS.get("/user/getUser", (res) => {
            this.user = res

            let i = 0;
            for (let food of this.foods){   
              let userFound = false;

              if (food.members){
                Object.keys(food.members).forEach(key => {
                  
                  if (key===this.user.userName)
                      userFound = true;
              })} 
              if (userFound)
                  this.foods[i].userFound = true;
              else
                  this.foods[i].userFound = false;
              i++}
          })
        }
      )}


    onSubscribedFood(food: any) {
        console.log(food.name)
        this.apiS.post("/inventory/subscribeToFood/"+food.name, {}, (res) => {console.log})
    }
    onSubscribedCarePackage(carepackage: any) {
        console.log(carepackage.name)
        this.apiS.post("/inventory/subscribeToCarePackage/"+carepackage.name, {}, (res) => {console.log})
    }

    
    onUnSubscribedFood(food: any) {
        console.log(food.name)
        this.apiS.delete("/inventory/subscribeToFood/"+food.name, (res) =>{console.log})
    }

    onUnSubscribedCarePackage(carepackage: any) {
        console.log(carepackage.name)
        this.apiS.delete("/inventory/subscribeToCarePackage/"+carepackage.name, (res) => {console.log})
    }



}



