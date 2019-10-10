import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const APIBaseURL = "http://18.221.215.81/api";

@Injectable()
export class APIService {
    get(endpoint: string, callback: (response) => void) {
        let observer = this.hc.get(
            APIBaseURL + endpoint
        );
        observer.subscribe((response) => callback(response));
    }
    delete(endpoint: string, callback: (response) => void) {
        let observer = this.hc.delete(
            APIBaseURL + endpoint
        );
        observer.subscribe((response) => callback(response));
    }
    post(endpoint: string, object: any, callback: (response) => void) {
        let observer = this.hc.post(
            APIBaseURL + endpoint,
            object,
            { headers: { "Content-Type": "application/json" } }
        );
        observer.subscribe((response) => callback(response));
    }
    constructor(private hc: HttpClient) { }
}
