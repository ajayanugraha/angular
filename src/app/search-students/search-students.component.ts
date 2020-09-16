import { Component, OnInit } from '@angular/core';
import { Student } from 'src/student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css'],
  //providers:[StudentService]
})
export class SearchStudentsComponent implements OnInit {
  stringId:String
  id:number
  students:Student[ ]

  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
    
    
  }
  private searchStudents(){
    //this.id=Number(this.stringId)
    
    this.studentService.getStudentsByName(this.stringId)
      .subscribe(students => this.students = students);
  }
  onSubmit(){
    this.searchStudents()
  }
    
    

  }


