import {Injectable} from '@angular/core';

@Injectable()
export class UserData {
    loadUsers():string[] {
        return ['admin','manager','supervisor'];
    }
}