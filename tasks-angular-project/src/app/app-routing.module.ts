import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { MainPageComponent } from './tasks/main-page/main-page.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
  {
    path:"new-task",
    component: TaskFormComponent
  },
  {
    path:"task-list",
    component: TaskListComponent, 
    //children:[]
  },
  {
    path:"edit-task/:id",
    component: EditTaskComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
