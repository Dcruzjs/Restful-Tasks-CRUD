import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TaskService } from './task.service';
import { AppRoutingModule } from '../app-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    MainPageComponent,
    TaskListComponent,
    TaskFormComponent,
    EditTaskComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    MainPageComponent
  ],
  providers: [TaskService],
  
})
export class TasksModule { }
