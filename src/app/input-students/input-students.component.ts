import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-students',
  templateUrl: './input-students.component.html',
  styleUrls: ['./input-students.component.css']
})
export class InputStudentsComponent implements OnInit {
  
  studentCollection: Array<object> = [];
   studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  studentRecord: object;
    private checkPatterns(value:any , pattern: RegExp): boolean {
    if(pattern.test(value))
      return true;
    else 
      return false;
  }
    @Output() AddStudents = new EventEmitter<any>();
  @Input() message;

  flag = 'addStudents';
  messages = '';
  printing = false;
  addStudentEntry(){
    this.studentRecord = {
          studNumber: this.studNo,
          studFirstName: this.studFname,
          studLastName: this.studLname,
          studProgram: this.studProg,
          studYear: this.studYr
        };

this.AddStudents.emit ({mode: this.flag});
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if (this.checkPatterns(this.studNo, studNumberPattern) &&
      this.checkPatterns(this.studFname, stringPattern) &&
      this.checkPatterns(this.studLname, stringPattern) &&
      this.checkPatterns(this.studProg, stringPattern) &&
      this.checkPatterns(this.studYr, studYearPattern)) {

        this.studentRecord = {
          studNumber: this.studNo,
          studFirstName: this.studFname,
          studLastName: this.studLname,
          studProgram: this.studProg,
          studYear: this.studYr
        };
        this.studentCollection.push(this.studentRecord);
        this.messages = null;
        this.clearValues();
    } else {
      this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
      return false;
    }
  }
  clearValues(): void{
    this.studNo = null;
    this.studFname = null;
    this.studLname= null;
    this.studProg = null;
    this.studYr = null;
  }
  constructor() { }

  ngOnInit() {
  }

}
