import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PresentationModule } from './presentation/presentation.module';
import { FormsModule } from '@angular/forms';
import { TaskApiRepository } from './data/task/task-repository';
import { TaskRepository } from './core/repositories/task.repository';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PresentationModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: TaskRepository,
      useClass: TaskApiRepository
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
