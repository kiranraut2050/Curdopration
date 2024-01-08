import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title(title: any) {
    
  }
  employeeForm: any;
  employee: any;
  employeeService: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }

  handleEmployeeAdded(employee: Employee) {
    console.log('New Employee Added:', employee);
  }
  addEmployee() {
    if (this.employeeForm.valid) {
  
      this.employeeService.addEmployee({
          id: this.employee.id,
          name: this.employee.EmpName,
          address: this.employee.empAddress,

          sex: this.employee.Sex,
          maritalStatus: this.employee.MarriedStatus,
          mobileNo: this.employee.EmpMobile,
          email: this.employee.email,
          isEditing: false,
          Dept: this.employee.Department,
          Sal: this.employee.Empsalary,
          WorkingStatus: this.employee.Working,
        });
      this.employee = {}; 
    }
  }
  
  updateEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee({
        id: this.employee.id,
        name: this.employee.EmpName,
        address: this.employee.empAddress,
        sex: this.employee.Sex,
        maritalStatus: this.employee.MarriedStatus,
        mobileNo: this.employee.EmpMobile,
        email: this.employee.email,
        isEditing: true, // Set isEditing to true when updating an employee
        Dept: this.employee.Department,
        Sal: this.employee.Empsalary,
        WorkingStatus: this.employee.Working,
      });
  
      this.employee = {};
    }
  }
  

  navigateToPage() {
    this.router.navigate(['/another-page']);
  }
}


