import { Component, OnInit } from '@angular/core';

import {InternalReport} from 'src/internalreport'

import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.css']
})
export class ViewMarksComponent implements OnInit {
  roll:number;
  internalReports:InternalReport[]

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
  private viewMarks(){
    //this.id=Number(this.stringId)
    
    this.studentService.getMarksByRoll(this.roll)
      .subscribe(internalReports => this.internalReports = internalReports);
  }
  onSubmit(){
    this.viewMarks()

  }
}
