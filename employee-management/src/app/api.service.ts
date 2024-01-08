import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl="https://localhost:7137/api";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/Emps`);
  }

  addEmployees(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`+'/Emps', data);
  }

updateEmployee(id: number, data: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/Emps/${id}`, data);
}

deleteEmployee(id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/Emps/${id}`);
}
}
