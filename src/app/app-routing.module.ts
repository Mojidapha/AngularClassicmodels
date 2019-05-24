import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { OfficesComponent } from './offices/offices.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductlinesComponent } from './productlines/productlines.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'customers', component:CustomersComponent},
  {path: 'employees', component:EmployeesComponent},
  {path: 'offices', component:OfficesComponent},
  {path: 'orderdetails', component:OrderdetailsComponent},
  {path: 'orders', component:OrdersComponent},
  {path: 'payments', component:PaymentsComponent},
  {path: 'productlines', component:ProductlinesComponent},
  {path: 'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
