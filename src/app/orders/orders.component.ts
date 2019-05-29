import { Component, OnInit } from '@angular/core';
import { Order } from '../Orders';
import { OrdersService } from '../orders.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  OrdersList: Order[];
  constructor(
    private ordersService : OrdersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders(): void {
    this.ordersService.getOrders()
      .subscribe(response => this.OrdersList = response);
      console.log(this.OrdersList);
  }

}
