import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksLayoutComponent } from './tasks-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TasksLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TasksLayoutModule { }
