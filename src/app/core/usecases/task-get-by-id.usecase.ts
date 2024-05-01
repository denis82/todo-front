import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { TaskDetailModel } from '../domain/task.model';
import { TaskRepository } from '../repositories/task.repository';

@Injectable({
  providedIn: 'root'
})
export class TaskGetByIdUsecase implements UseCase<string, TaskDetailModel> {
  constructor(private taskRepository: TaskRepository) { }

  execute(contractTemplateId: string): Observable<TaskDetailModel> {
    return this.taskRepository.taskGetById(contractTemplateId);
  }
}
