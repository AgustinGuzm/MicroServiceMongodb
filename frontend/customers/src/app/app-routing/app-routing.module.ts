import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { UsersComponent } from '../components/users/users.component';
import { FrontpageComponent } from '../components/frontpage/frontpage.component';
import { CustomerComponent } from '../components/customer/customer.component';

const routes: Routes =[
  {path: '', component: UsersComponent},
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'customer', component: CustomerComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  //imports: [
  //  CommonModule,
  //  AppRoutingRoutingModule
  //]
})
export class AppRoutingModule { }
