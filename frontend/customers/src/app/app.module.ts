import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@Angular/common/http';
//import { AppRoutingModule } from './app-routing.module_old';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomerComponent,
    FrontpageComponent,
    ThemeToggleComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule, // for http GET,POST,PUT,DELETE
    FormsModule, // for forms
    AppRoutingModule // for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
