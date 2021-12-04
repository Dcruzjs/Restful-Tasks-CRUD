import { Component, Input, OnInit } from '@angular/core';
import { TasksResp, TaskResponse, TaskResp } from '../interface/taskResp.interface';
import { Task } from '../interface/task.interface';
import { TaskService } from '../task.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  
  tasks$: Observable<TasksResp> | undefined;
  constructor(
    private taskService:TaskService,
    private _router:Router,
    private _route:ActivatedRoute) { 
    // this.getTasks()
  }

  taskToShow$: Observable<TaskResp> | undefined;
  
  deleteTask($event:any):void{
    console.log($event.target.id)
    this.taskService.deleteTask($event.target.id)
    this._router.navigate(['task-list'])
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks()
  }

  getTask($event:any){
    console.log($event.target.id)
    this.taskToShow$ = this.taskService.getTask($event.target.id)

  }
}
