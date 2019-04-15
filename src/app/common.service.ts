import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import {HttpParams} from "@angular/common/http";
import {paraminput} from "../app/paraminput"

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user){
    return this.http.post('http://"your ip":8081/api/SaveUser/', user)
            .map((response: Response) =>response.json())
  }

  GetUser(){
    
    return this.http.get('http://"your ip":8081/api/getUser1/')
            .map((response: Response) => response.json())
  }

  Getquiz(){
    
    return this.http.get('http://"your ip":8081/api/getquiz1/')
            .map((response: Response) => response.json())
  }

  

 deleteUser(id){
   console.log("service detle id :" + id);
    return this.http.post('http://"your ip":8081/api/deleteUser/',{'id': id})
            .map((response: Response) =>response.json())
  }

}