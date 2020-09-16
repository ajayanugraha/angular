import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InternalReport } from 'src/internalreport';
//import { Student } from 'src/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private baseUrl = 'http://localhost:8080/api/student';

  constructor(private http: HttpClient) { }
  

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/add`, student);
  }
  getStudentsByName(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/students`);
  }
  addStudentReport(internalreport: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/addmarks`, internalreport);
  }

  
  getMarksByRoll(roll: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/roll/${roll}`);
  }


}