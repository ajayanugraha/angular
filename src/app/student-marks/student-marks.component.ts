import { Component, OnInit } from '@angular/core';
import {InternalReport} from 'src/internalreport'
import{StudentService} from '../student.service'

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {
  
  internalReport: InternalReport = new InternalReport();

  submitted=false;

 
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }
  newInternalReport(): void {
    this.submitted = false;
    this.internalReport = new InternalReport();
  }

  save() {
    this.studentService.addStudentReport(this.internalReport)
      .subscribe(data => console.log(data), error => console.log(error));
    this.internalReport = new InternalReport();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
