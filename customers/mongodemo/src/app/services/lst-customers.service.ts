import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LstCustomersService {
  Credentials = {withCredentials: true};
  constructor( private _http: HttpClient) { }

  public lstcustomers(){
    return this._http.get("http://localhost:8083/documents/findall");
  }
  public findcustomerbyid(usrid: String){
    console.log(usrid);
    console.log("service point")
    return this._http.get("http://localhost:8083/documents/findbyid/"+usrid+"/", {observe: "response"}) as Observable<HttpResponse<User>>;
  }

  public deletecustomerbyid(usrid: String){
    console.log(usrid);
    console.log("service point");
    return this._http.delete("http://localhost:8083/documents/deletebyid/"+usrid+"/",{observe: "response"});

  }

  public insertupdatecustomer(user :any){
    console.log(user);
    console.log("service pointg");
    return this._http.post<any>("http://localhost:8083/documents/add" ,user ,httpOptions,);
  }
}
