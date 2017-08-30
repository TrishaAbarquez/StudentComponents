import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-students-component',
  templateUrl: './list-students-component.component.html',
  styleUrls: ['./list-students-component.component.css']
})
export class ListStudentsComponentComponent implements OnInit {
  @Output () ListStudents = new EventEmitter<any>();

  flag= 'list';
  list(){
     this.ListStudents.emit ({mode: this.flag});
  }
  constructor() { }

  ngOnInit() {
  }

}
