import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { TaskDetailModel } from '../domain/task.model';
import { TaskRepository } from '../repositories/task.repository';

@Injectable({
  providedIn: 'root'
})
export class TaskDeleteUsecase implements UseCase<number, TaskDetailModel> {
  constructor(private taskRepository: TaskRepository) { }

execute(taskId: number): Observable<TaskDetailModel> {
    return this.taskRepository.taskDelete(taskId);
  }
}
