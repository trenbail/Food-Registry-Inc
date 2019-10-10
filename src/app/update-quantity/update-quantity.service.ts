import { Injectable } from "@angular/core";
import { APIService } from '../shared/api.service';

@Injectable()
export class UpdateQuantityService {
    constructor(private as: APIService) {}
    getCarePackageInventory(callback: (response) => void) {
        this.as.get("/inventory/getCarePackageInventory", callback);
    }
    getFoodInventory(callback: (response) => void) {
        this.as.get("/inventory/getFoodInventory", callback);
    }
}