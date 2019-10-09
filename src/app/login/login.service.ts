import { Injectable } from "@angular/core";
import { APIService } from '../shared/api.service';

@Injectable()
export class LoginService {
    constructor(private as: APIService) { }
    login(authdata: any, callback: (response) => void) {
        this.as.post("/user/login", authdata, (response) => { callback(response) });
    }
}