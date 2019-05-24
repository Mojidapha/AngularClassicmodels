import { Component, OnInit } from '@angular/core';
import { Offices } from '../offices';
import { OfficesService } from '../offices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  OfficesList: Offices[];
  constructor(
    private officesService : OfficesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllOffices();
  }

  getAllOffices(): void {
    this.officesService.getOffices()
      .subscribe(response => this.OfficesList = response);
  }
}




