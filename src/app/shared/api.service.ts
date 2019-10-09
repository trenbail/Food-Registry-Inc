import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { callbackify } from 'util';

@Injectable()
export class APIService {
    post(endpoint: string, object: any, callback: (response) => void):any {
        let observer = this.hc.post(
            "http://18.221.215.81:3000" + endpoint,
            object,
            { headers: { "Content-Type": "application/json" } }
        );
        observer.subscribe((response) => callback(response));
    }
    constructor(private hc: HttpClient) { }
    login(object:any,callback:(response)=>void) {
        this.post("/user/login",object,(response)=>{callback(response)});
    }
}