import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() title: string | undefined;
  @Output() employeeAdded: EventEmitter<Employee> = new EventEmitter<Employee>();

  employee: Employee = new Employee();
  employees: Employee[] = [];

  isEdit = false;

 // employees$: BehaviorSubject<Employee[]>;

  constructor(private api: ApiService, private router: Router) {
    // this.employees$ = this.employeeService.getEmployees();
  }
ngOnInit(){
this.getEmployees();
}
 


  addEmployee() {
    
    if (this.employees) {
      this.api.addEmployees(this.employee).subscribe(
        (data:any) => {
          console.log('Employee added successfully:', data);
          this.getEmployees();
        },
        (error:any) => {
          console.error('Error adding employee:', error);
        }
      );
    }
  }
  

  getEmployees() {
      this.api.getEmployees().subscribe((data:any)=>{
        this.employees = data;
      });
  }

  editEmployee(emp: Employee) {
    
    emp.isEditing = true;
  }

 

  updateEmployee(emp : any) {
    debugger
    let empObj:any = {
      Id : emp.id,
      EmpName: emp.name,
      EmpAddress: emp.address,
      Sex: emp.sex,
      MaritalStatus: emp.maritalStatus,    
      EmpMobile: emp.mobileNo,
      Email: emp.email,
      isEditing: true,
      Department: emp.Dept,
      EmpSalary : emp.sal,
      Working : emp.WorkingStatus



    }
    if (this.employees) {
      this.api.updateEmployee(emp, empObj).subscribe(
        (data: any): void => {
          console.log('Employee edited successfully:', data);
          this.getEmployees();
        },
        (error: any) => {
          console.error('Error editing employee:', error);
        }
      );
    }
  }

  cancelUpdate(emp: Employee) {
    emp.isEditing = false;
  }

  deleteEmployee(emp: any) {
    if (this.employees) {
      this.api.deleteEmployee(emp).subscribe(
        (data: any): void => {
          console.log('Employee deleted successfully:', data);
          this.getEmployees(); 
        },
        (error: any) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }
  
  navigateToPage() {
    this.router.navigate(['/another-page']);
  }


  
}
