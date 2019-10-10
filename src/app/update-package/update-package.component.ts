import { Component, OnInit } from '@angular/core';
import { UpdatePackageService } from './update-package.service';

@Component({
  selector: 'update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {

  private carePackageInventory: any[] = [];
  private statusmessage: string;
  private success: boolean;

  update(f) {
    this.uqs.editCarePackage(f, (response) => {
      if (this.success = response.success) {
        this.statusmessage = response.success;
      } else {
        this.statusmessage = "Error Occured";
      }
    });
  }

  stringify(s: string): string {
    return JSON.stringify(s);
  }

  constructor(private uqs: UpdatePackageService) {
    uqs.getCarePackageInventory((response) => {
      for (let key of Object.keys(response)) {
        this.carePackageInventory.push(response[key]);
      }
    });
  }

  ngOnInit() {
  }

}
