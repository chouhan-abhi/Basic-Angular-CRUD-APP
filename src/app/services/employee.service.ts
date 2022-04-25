import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import endpoints from '../../constants/endpoints';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../interfaces/employeeDetails';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {

  constructor(private readonly http: HttpClient) { }
  headerOptions() {
    const optionsObject = { 'Content-Type': 'application/json' };
    return { headers: new HttpHeaders(optionsObject) };
  }

  getEmployees(): Observable<any>{
    const url = endpoints().employee;
    return this.http.get(url, this.headerOptions());
  }

  postEmployee(payload: EmployeeDetails): Observable<any>{
    const url = endpoints().employee;
    return this.http.post(url, payload, this.headerOptions());
  }

  updateEmployee(payload: EmployeeDetails): Observable<any>{
    const url = `${endpoints().employee}/${payload.id}`;
    return this.http.patch(url, payload, this.headerOptions());
  }

  deleteEmployee(employeeId: string): Observable<any>{
    const url = `${endpoints().employee}/${employeeId}`;
    return this.http.delete(url, this.headerOptions());
  }
}
