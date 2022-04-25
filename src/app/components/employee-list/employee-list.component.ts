import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { EmployeeDetails } from 'src/app/interfaces/employeeDetails';
import { EmplyeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: EmployeeDetails[] = [];
  isAddNew = false;
  private _subscription$: any;

  constructor(private readonly employeeService: EmplyeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this._subscription$ = this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
      console.log(res);
    });
  }

  ngOnDestroy(){
    this._subscription$.unsubscribe();
  }

}
