import { Component, OnInit, inject } from '@angular/core';
import { IStudent } from '../../Interfaces/Student';
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  router=inject(Router);
  StudentList:IStudent[]=[];
  httpService=inject(HttpService);
  toaster= inject(ToastrService);
  displayedColumns: string[] = ['id', 'name', 'doB', 'address', 'phoneNum', 'action'];
  constructor(){

  }
  ngOnInit(): void {
    this.httpService.getAllStudent().subscribe( result => {
      this.StudentList=result;
      console.log(this.StudentList);

    });
  }
  edit(id:number){
    console.log(id);
    this.router.navigateByUrl("/student/"+id);
  }
  delete(id:number){
    this.httpService.deleteStudent(id).subscribe(() => {
      console.log("delete");  
      this.toaster.success("Deleted successfully.");
      this.StudentList= this.StudentList.filter(x=> x.id!=id);
  })
}
}
