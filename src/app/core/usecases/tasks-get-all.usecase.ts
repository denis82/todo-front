import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { TasksInstanceListModel } from '../domain/task.model';
import { TaskRepository } from '../repositories/task.repository';

@Injectable({
  providedIn: 'root'
})
export class TasksGetAllUsecase implements UseCase<void, TasksInstanceListModel> {
  constructor(private taskRepository: TaskRepository) { }

  execute(): Observable<TasksInstanceListModel> {
    return this.taskRepository.tasksGetAll();
  }
}
