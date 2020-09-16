import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from 'src/student';

import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student: Student;

  constructor(private StudentService: StudentService, private listComponent: StudentsListComponent) { }

  ngOnInit() {
  }



  deleteStudent() {
    this.StudentService.deleteStudent(this.student.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
  exportStudent(){

    this.StudentService.deleteStudent(this.student.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
