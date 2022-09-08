import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay, observable, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET'

  })
};

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  usrID!: String;
  fname!: String;
  lname!: String;
  bdate!: String;
  email!:String;
  ccname!: String;
  ccnum!: String;
  uname!: string;

  user = {userid: String,
          username: String,
          lastname: String,
          BirthDate: String,
          emailadd: String,
          ccname :String,
          ccnumber : String,
          phnumber: String

        };
  response : any ;
  msgError ="";
  Credentials = {withCredentials: true};
  s_username: any;
  constructor(private _http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
  addcustomer(){
    let user = {
      userid: this.usrID,
      username: this.fname,
      lastname: this.lname,
      BirthDate: this.bdate,
      emailadd: this.email,
      ccname : this.ccname,
      ccnumber : this.ccnum
    };
    console.log("before httrequest");
    console.log(user);
let Credentials = {withCredentials: true};
delay(50000);
let response =this._http.post<any>("http://localhost:8083/documents/add" ,user ,httpOptions,).subscribe (
{
next: (v) =>  this.router.navigate(['/']),  //console.log("reponse rcieved"),
error: (e) => console.error(this.msgError="Completed"),
complete: () => console.info('Complete')
});

console.log(response);

  }
}
