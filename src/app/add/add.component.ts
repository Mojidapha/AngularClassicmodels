import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { Orders } from '../Orders';
import {NgbDateStruct, NgbCalendar,NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';
import { Products } from '../Products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}] //ถ้าไม่ใส่บรรทัดนี้ข้อมูลที่ได้จะได้เป็น day:1 month:2 year:3
  
})

export class AddComponent implements OnInit {

  orders: Orders=new Orders();

  CustomersList: Customers[];
  ProductsList: Products[];
  OrdersList: Orders[];

  constructor(
    private customersService : CustomersService,
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private ProductsService : ProductsService,
  ) { }

  ngOnInit() {
    this.getAllCustomers();
    this.getAllProducts();
    this.getAllOrders();
  }

  getAllOrders(): void {
    this.ordersService.getOrders()
      .subscribe(response => this.OrdersList = response);
      console.log(this.OrdersList);
  }

  getAllCustomers(): void {
    this.customersService.getCustomers()
      .subscribe(response => this.CustomersList = response);
  }

  getAllProducts(): void {
    this.ProductsService.getProducts()
      .subscribe(response => this.ProductsList = response);
  }

  /*AddOrders(orders){
    console.log(orders);
  }*/
  AddOrders(orders){
    let list = this.OrdersList;
    let max = 0;
    for (let i of list) {
      if(i.orderNumber>max){
          max=i.orderNumber;
      }
   }
    //orders.orderNumber=max+1;
    orders.orderNumber=max;
    console.log(orders);
    console.log(orders.quantityOrdered);

    orders.orderdetails=[{
      orderNumber: orders.orderNumber,
      quantityOrdered: orders.quantityOrdered,
      priceEach: orders.priceEach,
      orderLineNumber: orders.orderLineNumber,
      productCode: orders.productCode
    }]

   this.ordersService.AddOrders(orders)
    .subscribe(Response => this.gotoIndex(Response));
 }
  gotoIndex(status): void{
    console.log(status);
    this.router.navigate(['']).then( (e) =>{
      if (e) {
        console.log("Navigation is successful!");
      }
      else{
        console.log("Navigation has failed!");
      }
  });
  }
}




