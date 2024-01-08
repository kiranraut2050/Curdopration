export interface Employee  {
  isEditing: boolean;
  id: undefined;
  EmpName?: string;
  WorkingStatus: string;
  mobileNo: string;
  email: string;
  empAddress?: string;
  gender: string;
  maritalStatus: string;
  Dept : any;
  Sal : string;
}
export class Employee implements Employee {
  isEditing: boolean;
  id: undefined
  empName?: string;
  empAddress?: string;
  working?: string ;
  empMobile?: string;
  email: string;
  sex?: string;
  marriedStatus?: string;
  department?: any;
  empsalary?: string;

  constructor() {
    this.isEditing = false;
    id: undefined;

    this.EmpName = '';
    this.empAddress = '';
    this.sex = '';
    this.marriedStatus = '';
    this.working=' ';
    this.empMobile = '';
    this.empsalary='';
    this.department='';
    this.email = '';

  }
}
