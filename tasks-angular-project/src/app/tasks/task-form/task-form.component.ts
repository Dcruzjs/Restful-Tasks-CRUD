import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../interface/task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {

  task:Task = {
    title:"",
    description:  "",
    completed:"false",
  }
  @Input() getTasks:any;
  constructor(
    private taskService:TaskService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  createTask(){
    console.log("creating task")
    this.taskService.createTask(this.task).subscribe(data =>{
      console.log(data)
      this._router.navigate(["task-list"])
    })

  }

}
