import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { Orders } from '../Orders';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],

  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class EditComponent implements OnInit {

  orders: Orders;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService,) { }

  ngOnInit() {
    let orderNumber = this.route.snapshot.paramMap.get('orderNumber');
    console.log(orderNumber);
    this.editOrders(orderNumber);
  }
  editOrders(orderNumber): void{
    this.ordersService.editOrders(orderNumber)
    .subscribe(Response => this.orders = Response);
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
