
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers:[StudentService]
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();

  submitted=false;

 
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }
  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
