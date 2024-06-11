import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IStudent } from './Interfaces/Student';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7168";
   http=inject(HttpClient)
  constructor() { }
 

  getAllStudent(){
    return this.http.get<IStudent[]>( this.apiUrl + "/api/Student1");
  }

  createStudent(student:IStudent){
    return this.http.post<IStudent>(this.apiUrl + "/api/Student1", student);
  }

  editStudent(studentid:number){
    return this.http.get<IStudent>( this.apiUrl + "/api/Student1/"+studentid);
  }

  updateStudent(studentid:number, student:IStudent){
    return this.http.put<IStudent>( this.apiUrl + "/api/Student1/"+studentid, student);
  }

  deleteStudent(studentid:number){
    return this.http.delete<IStudent>( this.apiUrl + "/api/Student1/"+studentid);
  }
}
