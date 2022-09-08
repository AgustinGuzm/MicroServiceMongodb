import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainModule } from './main/main.module';
import { MainRoutingModule } from './main/main-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule, // for http GET,POST,PUT,DELETE
    FormsModule, // for forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
