import { NgModule } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TaskFilterPipe } from '../view/task-filter.pipe';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';



@NgModule({
  declarations: [
    TaskFilterPipe,
    TaskNewComponent,
    TaskListComponent,
    TaskEditComponent
  ],
  imports: [
    RouterLink,
    RouterModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [TaskFilterPipe]
})
export class TasksModule { }
