import {Injectable} from '@angular/platform-browser';

@Injectable
export class DepartmentData {
    loadDepartments():string[] {
        return ['cs','art','ee'];
    }
}