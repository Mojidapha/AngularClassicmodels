import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';
import { Customers } from '../customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  CustomersList: Customers[];
  constructor(
    private customersService : CustomersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.customersService.getCustomers()
      .subscribe(response => this.CustomersList = response);
  }

}


