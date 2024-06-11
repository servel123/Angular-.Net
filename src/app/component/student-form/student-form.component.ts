import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpService } from '../../http.service';
import { IStudent } from '../../Interfaces/Student';
import { partition } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [MatInputModule,RouterLink,FormsModule,ReactiveFormsModule,],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
 formBuilder= inject(FormBuilder);
 httpServece= inject(HttpService);
 route= inject(ActivatedRoute);
 router= inject(Router);
toastr= inject(ToastrService);

 studentForm = this.formBuilder.group({
  name: ['',[Validators.required]],
  doB: ['',[Validators.required]],
  address: ['',[Validators.required]],
  phoneNum: ['',[Validators.required]],
 });

 studentId!:number;
 isedit = false;
  ngOnInit(){
    this.studentId = this.route.snapshot.params['id'];
    if(this.studentId){ 
      this.isedit=true;
      this.httpServece.editStudent(this.studentId).subscribe( result => {
        console.log(result);
        this.studentForm.patchValue(result);
      })
    }

 }

 save(){
  console.log(this.studentForm.value);
  const student : IStudent={
  
    name:this.studentForm.value.name!,
    doB:this.studentForm.value.doB!,
    address:this.studentForm.value.address!,
    phoneNum: this.studentForm.value.phoneNum!,
  }
  if(this.isedit){
    this.httpServece.updateStudent(this.studentId, student).subscribe(()=>{
      console.log("success");
      this.toastr.success("Updated successfully.");
      this.router.navigateByUrl("/student");
    });
  }
  else{
  this.httpServece.createStudent(student).subscribe(()=>{
    console.log("success");
    this.toastr.success("Added successfully.");
    this.router.navigateByUrl("/student");
  });}
 }
}
