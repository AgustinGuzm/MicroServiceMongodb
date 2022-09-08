import { Component, OnInit } from '@angular/core';
import { LstCustomersService } from 'src/app/services/lst-customers.service';
import {  HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { delay } from 'rxjs';

const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-mnto-customers',
  templateUrl: './mnto-customers.component.html',
  styleUrls: ['./mnto-customers.component.css']
})
export class MntoCustomersComponent implements OnInit {
  isVisible: boolean = false;
  public name: string = '';

  usrID!: String;
  fname!: String;
  lname!: String;
  bdate!: String;
  email!: String;
  ccname!: String;
  ccnum!: String;
  uname!: string;
  nuser!: User;
  user = {userid: String,
          username: String,
          lastname: String,
          birthDate: String,
          emailadd: String,
          ccname :String,
          ccnumber : String,
          phnumber: String

        };
  response : any ;
  msgError ="";
  constructor(private usrservice: LstCustomersService, private router : Router) { }
  ngOnInit(): void {
  }

  getcusomerbyId(){
    let usrid = this.name;
    let resp=this.usrservice.findcustomerbyid(usrid);
    resp.subscribe((data:any) =>{
      this.user= data;
      this.user=data.body;
      console.log(data);
      console.log(data.body);
        this.usrID=  data.body.userid;
        this.fname=  data.body.username;
        this.lname=  data.body.lastname;
        this.bdate=  data.body.birthDate;
        this.email=  data.body.emailadd;
        this.ccname= data.body.ccname;
        this.ccnum=  data.body.ccnumber;
        this.uname=  data.body.phnumber;
    })
  }
  udpcustomer(){
    let user = {
      userid: this.usrID,
      username: this.fname,
      lastname: this.lname,
      BirthDate: this.bdate,
      emailadd: this.email,
      ccname : this.ccname,
      ccnumber : this.ccnum,
      phnumber: this.uname
    };
    console.log(user);
    console.log("Update point");
    delay(5000);
    let resp=this.usrservice.insertupdatecustomer(user);
    resp.subscribe({
                    next: (v) =>  this.router.navigate(['/']),  //console.log("reponse rcieved"),
                    error: (e) => console.error(this.msgError="Completed"),
                    complete: () => console.info('Complete')
      })
  }
  delcustomer(){
    let resp=this.usrservice.deletecustomerbyid(this.usrID);
    resp.subscribe(
                    {next: (v) =>  this.router.navigate(['/']),  //console.log("reponse rcieved"),
                    error: (e) => console.error(this.msgError="I/O Error found"),
                    complete: () => console.info('Complete')
                  });
    console.log(resp);
  }
}
