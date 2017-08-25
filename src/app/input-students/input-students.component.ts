import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-students',
  templateUrl: './input-students.component.html',
  styleUrls: ['./input-students.component.css']
})
export class InputStudentsComponent implements OnInit {
  StudNo;
  StudFname;
  StudLname;
  StudProg;
  StudYr;
  constructor() { }

  ngOnInit() {
  }

}
