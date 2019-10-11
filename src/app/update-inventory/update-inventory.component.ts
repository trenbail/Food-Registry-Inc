import { Component, OnInit } from '@angular/core';
import { UpdateInventoryService } from './update-inventory.service';

@Component({
  selector: 'update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {

  private carePackageInventory: any[] = [];
  private statusmessage: string;
  private success: boolean;
  private foodInventory: any[] = [];

  updateCarePackage(f) {
    this.uqs.editCarePackage(f, (response) => {
      if (this.success = response.success) {
        this.statusmessage = response.success;
      } else {
        this.statusmessage = "Error Occured";
      }
      setTimeout(()=>this.success=undefined,5000);
    });
  }

  updateFood(f) {
    this.uqs.editFood(f, (response) => {
      console.log(response)//TODO remove this
      //Check if correct
      if (this.success = response.success) {
        this.statusmessage = response.success;
      } else {
        this.statusmessage = "Error Occured";
      }
      //Check if correct
      setTimeout(()=>this.success=undefined,5000);
    });
  }

  stringify(s: string): string {
    return JSON.stringify(s);
  }

  constructor(private uqs: UpdateInventoryService) {
    uqs.getCarePackageInventory((response) => {
      for (let key of Object.keys(response)) {
        this.carePackageInventory.push(response[key]);
      }
    });
    uqs.getFoodInventory((response) => {
      for (let key of Object.keys(response)) {
        this.foodInventory.push(response[key]);
      }
    });
  }

  ngOnInit() {
  }

}
