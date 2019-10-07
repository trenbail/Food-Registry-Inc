import {Injectable} from '@angular/core';

@Injectable()
export class DepartmentData {
    loadDepartments():string[] {
        return ['cs','art','ee'];
    }
}