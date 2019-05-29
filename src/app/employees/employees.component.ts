import { Component, OnInit } from '@angular/core';
import { Employees } from '../Employees';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  EmployeesList: Employees[];
  constructor(
    private employeesService : EmployeesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeesService.getEmployees()
      .subscribe(response => this.EmployeesList = response);
  }

}
