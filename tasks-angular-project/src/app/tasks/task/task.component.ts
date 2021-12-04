import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interface/task.interface';
import { TaskResponse } from '../interface/taskResp.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task:TaskResponse = {
    _id:         "",
    title:       "",
    description: "",
    completed:   "",
    createdAt:   new Date(),
    updatedAt:   new Date(),
    __v:         0,
}
  constructor() { }

  ngOnInit(): void {
  }

}
