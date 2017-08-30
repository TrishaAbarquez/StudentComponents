import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InputStudentsComponent } from './input-students/input-students.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ListStudentsComponentComponent } from './list-students-component/list-students-component.component';
import { DisplayStudentComponentComponent } from './display-student-component/display-student-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputStudentsComponent,
    AddStudentsComponent,
    ListStudentsComponentComponent,
    DisplayStudentComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
