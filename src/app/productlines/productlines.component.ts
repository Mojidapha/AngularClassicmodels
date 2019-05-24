import { Component, OnInit } from '@angular/core';
import { Productlines } from '../Productlines';
import { ProductlinesService } from '../productlines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlines',
  templateUrl: './productlines.component.html',
  styleUrls: ['./productlines.component.css']
})
export class ProductlinesComponent implements OnInit {

  ProductlinesList: Productlines[];
  constructor(
    private productlinesService : ProductlinesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getAllProductlines(): void {
    this.productlinesService.getProductlines()
      .subscribe(response => this.ProductlinesList = response);
  }
}
