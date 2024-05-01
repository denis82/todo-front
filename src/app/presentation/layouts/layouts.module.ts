import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksLayoutModule } from './tasks-layout/tasks-layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TasksLayoutModule
  ]
})
export class LayoutsModule { }
