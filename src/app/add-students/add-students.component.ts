import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  @Output() AddStudents = new EventEmitter<any>();
  @Input() message;

  flag = 'addStudents';

  addStudents(){
    this.AddStudents.emit ({mode: this.flag});
  }

  constructor() { }

  ngOnInit() {
  }

}
