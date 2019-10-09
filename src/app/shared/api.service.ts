import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class APIService {
    get(endpoint: string, callback: (response) => void) {
        let observer = this.hc.delete(
            "http://18.221.215.81:3000" + endpoint
        );
        observer.subscribe((response) => callback(response));
    }
    delete(endpoint: string, callback: (response) => void) {
        let observer = this.hc.delete(
            "http://18.221.215.81:3000" + endpoint
        );
        observer.subscribe((response) => callback(response));
    }
    post(endpoint: string, object: any, callback: (response) => void) {
        let observer = this.hc.post(
            "http://18.221.215.81:3000" + endpoint,
            object,
            { headers: { "Content-Type": "application/json" } }
        );
        observer.subscribe((response) => callback(response));
    }
    constructor(private hc: HttpClient) { }
    login(object: any, callback: (response) => void) {
        this.post("/user/login", object, (response) => { callback(response) });
    }
}