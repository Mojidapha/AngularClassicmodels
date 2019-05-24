import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ProductsList: Products[];
  constructor(
    private ProductsService : ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(): void {
    this.ProductsService.getProducts()
      .subscribe(response => this.ProductsList = response);
  }

}
