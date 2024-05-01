import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { TaskDetailModel, TaskPostModel } from '../domain/task.model';
import { TaskRepository } from '../repositories/task.repository';

@Injectable({
  providedIn: 'root'
})
export class TaskUpdateUsecase implements UseCase<TaskDetailModel, TaskDetailModel> {
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(params: TaskDetailModel): Observable<TaskDetailModel> {
    return this.taskRepository.taskUpdate(params);
  }
}
