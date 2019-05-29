import { Component, OnInit } from '@angular/core';
import { Orderdetails } from '../Orderdetails';
import { OrderdetailsService } from '../orderdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  OrderdetailsList: Orderdetails[];
  constructor(
    private orderdetailsService : OrderdetailsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllOrderdetails();
  }

  getAllOrderdetails(): void {
    this.orderdetailsService.getOrderdetails()
      .subscribe(response => this.OrderdetailsList = response);
  }

}
