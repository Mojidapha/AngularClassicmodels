import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';
import { Router } from '@angular/router';
import { Payments } from '../Payments';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  PaymentsList: Payments[];
  constructor(
    private paymentsService : PaymentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllPayments();
  }
  getAllPayments(): void {
    this.paymentsService.getPayments()
      .subscribe(response => this.PaymentsList = response);
  }
}
