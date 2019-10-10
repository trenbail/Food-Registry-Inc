import { Injectable } from "@angular/core";
import { APIService } from '../shared/api.service';

@Injectable()
export class UpdatePackageService {
    constructor(private as: APIService) { }
    editCarePackage(object, callback: (response) => void) {
        this.as.post("/inventory/editCarePackage", object, callback)
    }
    getCarePackageInventory(callback: (response) => void) {
        this.as.get("/inventory/getCarePackageInventory", callback);
    }
    getFoodInventory(callback: (response) => void) {
        this.as.get("/inventory/getFoodInventory", callback);
    }
}