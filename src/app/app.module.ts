import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { OfficesComponent } from './offices/offices.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductlinesComponent } from './productlines/productlines.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CustomersComponent,
    EmployeesComponent,
    OfficesComponent,
    OrderdetailsComponent,
    PaymentsComponent,
    ProductlinesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


