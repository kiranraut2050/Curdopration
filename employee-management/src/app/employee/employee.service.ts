import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);

  addEmployee(employee: Employee) {
    const employees = this.employees$.getValue();
    employees.push(employee);
    this.employees$.next(employees);
  }

  getEmployees(): BehaviorSubject<Employee[]> {
    return this.employees$;
  }

  

  updateEmployee(updatedEmployee: Employee) {
    const currentEmployees = this.employees$.value;
    const updatedEmployees = currentEmployees.map(employee => {
      if (employee.id === updatedEmployee.id) {
        return { ...employee, ...updatedEmployee };
      }
      return employee;
    });

    this.employees$.next(updatedEmployees);
  }

  deleteEmployee(employee: Employee) {
    const employees = this.employees$.getValue();
    const index = this.findEmployeeIndex(employees, employee.id);
    if (index !== -1) {
      employees.splice(index, 1);
      this.employees$.next(employees);
    }
  }

  private findEmployeeIndex(employees: Employee[], id: number | undefined): number {
    if (id === undefined) {
      return -1;
    }
    return employees.findIndex(emp => emp.id === id);
  }
}
