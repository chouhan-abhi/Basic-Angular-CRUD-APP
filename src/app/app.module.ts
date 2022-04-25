import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
