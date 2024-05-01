import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksModule } from './tasks/tasks.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { PresentationRoutingModule } from './presentation-routing.module';
import { LayoutsModule } from './layouts/layouts.module';



@NgModule({
  declarations: [
  ],
  imports: [
    RouterLink,
    TasksModule,
    RouterModule,
    CommonModule,
    LayoutsModule,
    BrowserModule,
    PresentationRoutingModule
  ],
  exports: [RouterModule],
})
export class PresentationModule { }
