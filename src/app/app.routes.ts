import { Routes } from '@angular/router';
import { StudentComponent } from './component/student/student.component';
import { StudentFormComponent } from './component/student-form/student-form.component';

export const routes: Routes = [
    {
        path:""
        ,
        component:StudentComponent
    },
    {
        path:"student"
        ,
        component:StudentComponent
    },
    {
        path:"createstudent"
        ,
        component:StudentFormComponent
    },
    {
        path:"student/:id"
        ,
        component:StudentFormComponent
    },
];
