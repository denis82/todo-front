import { Component } from '@angular/core';

import { TasksInstanceListModel } from 'src/app/core/domain/task.model';
import { TaskDeleteUsecase } from 'src/app/core/usecases/task-delete-usecase';
import { TasksGetAllUsecase } from 'src/app/core/usecases/tasks-get-all.usecase';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  public search = '';
  public errorDelete = '';
  public tasks: TasksInstanceListModel[] = [];

  constructor(
    private _taskDelete: TaskDeleteUsecase,
    private _tasksGetAll: TasksGetAllUsecase
  ) {}

  ngOnInit(): void {
    this._tasksGetAll
      .execute()
      .subscribe((value: TasksInstanceListModel) => {
        this.tasks.push(value);
      });
  }

  deleteTask(taskId?: number | null):void {
    if(taskId){
      this._taskDelete.execute(taskId).subscribe(() => {
        this.errorDelete = '1'
        this.tasks = this.tasks.filter(  person => person.id != taskId )
      },
      () => {
        this.errorDelete = '0'
      }
      );
    }
  }

  taskFilter(filterId: string ): void {
    this.search = filterId
  }
}
