import {Injectable} from '@angular/platform-browser';

@Injectable
export class UserData {
    loadUsers():string[] {
        return ['admin','manager','supervisor'];
    }
}