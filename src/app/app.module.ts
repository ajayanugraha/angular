import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SearchStudentsComponent } from './search-students/search-students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { ViewMarksComponent } from './view-marks/view-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    SearchStudentsComponent,
    StudentDetailsComponent,
    StudentsListComponent,
    StudentMarksComponent,
    ViewMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    
         FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
