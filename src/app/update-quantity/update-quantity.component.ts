import { Component, OnInit } from '@angular/core';
import { UpdateQuantityService } from './update-quantity.service';

@Component({
  selector: 'app-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.css']
})
export class UpdateQuantityComponent implements OnInit {

  private carePackageInventory;

  constructor(uqs: UpdateQuantityService) {
    uqs.getCarePackageInventory((response) => {
      this.carePackageInventory = response;
    });
  }

  ngOnInit() {
  }

}
