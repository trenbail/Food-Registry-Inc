import { Injectable } from "@angular/core";
import { APIService } from '../shared/api.service';

@Injectable()
export class UpdateInventoryService {
    constructor(private as: APIService) { }
    editFood(object, callback: (response) => void) {
        this.as.post("/inventory/editFood", object, callback);
    }
    editCarePackage(object, callback: (response) => void) {
        this.as.post("/inventory/editCarePackage", object, callback);
    }
    getCarePackageInventory(callback: (response) => void) {
        this.as.get("/inventory/getCarePackageInventory", callback);
    }
    getFoodInventory(callback: (response) => void) {
        this.as.get("/inventory/getFoodInventory", callback);
    }
}