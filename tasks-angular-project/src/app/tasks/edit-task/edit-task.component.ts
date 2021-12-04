import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../interface/task.interface';
import { TaskResp, TaskResponse } from "../interface/taskResp.interface";
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {

  task:TaskResponse = {
    _id:"",
    title:"",
    description:"",
    completed:"",
    createdAt:new Date(),
    updatedAt:new Date(),
    __v:0,
  }

  constructor(
    private taskService:TaskService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 

}

ngOnInit(): void {
    this._route.params.pipe( switchMap(({id})=> this.taskService.getTask(id)) )
    .subscribe( (resp:TaskResp) => {
      console.log("Task Received: ", resp.task._id );
      this.task = resp.task
    
    });
  
  }

  updateTask(){
    console.log("updating task")
    this.taskService.updateTask(this.task._id, this.task ).subscribe(data => console.log(data))
    this._router.navigate(["task-list"])
    
  }
  
  deleteTask($event:any){
    console.log("deleting task")
    console.log($event.target.id)
    this.taskService.deleteTask($event.target.id).subscribe(data =>{
      console.log(data)
      this._router.navigate(["task-list"])
    } )
    
  }
}
