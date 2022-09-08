import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomersComponent } from './customers/customers.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { LstCustomersComponent } from './lst-customers/lst-customers.component';
import { MntoCustomersComponent } from './mnto-customers/mnto-customers.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    CustomersComponent,
    LstCustomersComponent,
    MntoCustomersComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule, // for http GET,POST,PUT,DELETE
    FormsModule, // for forms
    AngularMaterialModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MainModule { }
