import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import { SearchStudentsComponent } from './search-students/search-students.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentsListComponent } from './students-list/students-list.component';
import {ViewMarksComponent} from './view-marks/view-marks.component'


const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  
  {path:'add',component:AddStudentComponent },
  {path:'search',component:SearchStudentsComponent},
  {path:'view',component:StudentsListComponent },
  {path:'marks',component:StudentMarksComponent},
  {path:'view-marks',component:ViewMarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
