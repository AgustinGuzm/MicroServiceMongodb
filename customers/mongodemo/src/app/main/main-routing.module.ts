import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { LstCustomersComponent } from './lst-customers/lst-customers.component';
import { MntoCustomersComponent } from './mnto-customers/mnto-customers.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent  },
  { path: "contactus", component: ContactusComponent },
  { path: "customers", component: CustomersComponent},
  { path: "lst-customers", component: LstCustomersComponent},
  { path: "mnto-customers", component: MntoCustomersComponent}
];

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
