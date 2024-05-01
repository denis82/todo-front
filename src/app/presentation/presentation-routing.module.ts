import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksLayoutComponent } from './layouts/tasks-layout/tasks-layout.component';



import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskNewComponent } from './tasks/task-new/task-new.component';


const routes: Routes = [
  {
    path: '',
    component: TasksLayoutComponent,
    children: [
      {
        path: 'task/create',
        component: TaskNewComponent
      },
      {
        path: 'task',
        component: TaskListComponent
      },
      {
        path: 'task/:id',
        component: TaskComponent
      },

      {
        path: 'task/:id/edit',
        component: TaskEditComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
