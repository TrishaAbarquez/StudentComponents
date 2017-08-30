import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-students',
  templateUrl: './input-students.component.html',
  styleUrls: ['./input-students.component.css']
})
export class InputStudentsComponent implements OnInit {
   studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  studentRecord: object;
  addStudentEntry(){
    this.studentRecord = {
          studNumber: this.studNo,
          studFirstName: this.studFname,
          studLastName: this.studLname,
          studProgram: this.studProg,
          studYear: this.studYr
        };
return this.studentRecord;

}
  constructor() { }

  ngOnInit() {
  }

}
