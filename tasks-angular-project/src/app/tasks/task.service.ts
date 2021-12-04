import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskResp, TasksResp } from "./interface/taskResp.interface";
import { Observable } from 'rxjs';
import { Task } from './interface/task.interface';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  URL: string = `http://localhost:8181`
  constructor(private _http: HttpClient) { }

  getTasks(){
    return this._http.get<TasksResp>(this.URL)
  }

  getTask(id:string){
    return this._http.get<TaskResp>(`${this.URL}/${id}`)
  }

  createTask(newTask:Task){
    console.log("SERVICE",newTask)
    return this._http.post<TaskResp>(`${this.URL}/new`, newTask)
  }

  updateTask(id:string, task:Task){
    return this._http.put<TaskResp>(`${this.URL}/${id}`, task)

  }

  deleteTask(id:string){
    return this._http.delete(`${this.URL}/remove/${id}`)
    // this._http.delete(`${this.URL}/remove/${id}/`)
  }
}
