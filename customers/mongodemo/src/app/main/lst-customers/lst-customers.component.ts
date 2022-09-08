import { Component, OnInit } from '@angular/core';
import { LstCustomersService } from 'src/app/services/lst-customers.service';
import { User } from 'src/app/models/user';
import {MatTableDataSource } from '@angular/material/table'



@Component({
  selector: 'app-lst-customers',
  templateUrl: './lst-customers.component.html',
  styleUrls: ['./lst-customers.component.css']
})

export class LstCustomersComponent implements OnInit {
  ELEMENT_DATA: User[]=[];
  displayedColumns: string[] = ['userid','username','lastname', 'birthDate', 'emailadd','ccname', 'ccnumber','phnumber'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
  constructor(private usrservice: LstCustomersService) { }

  ngOnInit(): void {
    this.getAllCustomers();
    console.log(this.dataSource);
  }
  public getAllCustomers(){
    let resp=this.usrservice.lstcustomers();
    resp.subscribe(report=>this.dataSource.data= report as User[]);
    console.log(resp);
  }
}

