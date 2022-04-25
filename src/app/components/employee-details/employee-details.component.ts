import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeDetails } from '../../interfaces/employeeDetails';
import { EmplyeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
  isEditable = false;
  @Input("employeeDetails") employeeDetails: EmployeeDetails | any;
  @Input("editType") editType: string | any;
  private _subscription$: any[] = [];
  displayState = {
    isAddressDetailsVisible: false,
    isCompanyDetialsVisible: false
  } 

  constructor(private readonly employeeService: EmplyeeService) { }

  ngOnInit(): void {
    if (this.employeeDetails === undefined && this.editType === 'create') {
      this.isEditable = true;
      this.employeeDetails = {
        id: '',
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      }
    }
  }

  updateSelectedDetails() {
    this.isEditable = !this.isEditable;
  }

  updateDetails(pathString: any, event: any) {
    const pathArr = pathString.split('.');
    const temp = JSON.parse(JSON.stringify(this.employeeDetails));
    let tempObjRef = temp;

    while(pathArr.length>1){
      let path = pathArr.shift();
      if (tempObjRef.hasOwnProperty(path)){ 
        tempObjRef = tempObjRef[path];
      }
    }
  
    tempObjRef[pathArr.shift()] = event.value;
    this.employeeDetails = temp;
    console.log(this.employeeDetails);
  }

  persistChanges(){
    if(this.editType == 'create') {
      //Need to perform error handling and feedBacks
      const subscription = this.employeeService.postEmployee(this.employeeDetails).subscribe((res)=>{
        alert('Success');
      });
      this._subscription$.push(subscription);
    }else{
      //Need to perform error handling and feedBacks
      const subscription = this.employeeService.updateEmployee(this.employeeDetails).subscribe((res)=>{
        alert('Success');
      });
      this._subscription$.push(subscription);
    }
  }

  deleteEmployee(){
    //Need to perform error handling and feedBacks
    const subscription = this.employeeService.deleteEmployee(this.employeeDetails.id).subscribe((res)=>{
      alert('Success');
    });
    this._subscription$.push(subscription);
  }

  ngOnDestroy(){
    this._subscription$.forEach(subscription => {
      subscription.unsubscribe()
    });
  }
}

