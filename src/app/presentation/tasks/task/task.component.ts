import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDetailModel } from 'src/app/core/domain/task.model';
import { TaskGetByIdUsecase } from 'src/app/core/usecases/task-get-by-id.usecase';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  public task?: TaskDetailModel;

  constructor(
    private readonly _route: ActivatedRoute,
    private _taskGetById: TaskGetByIdUsecase
  ) {
  }

  ngOnInit(): void {
    const taskId = this._route.snapshot.params['id'];
    this._taskGetById.execute(taskId).subscribe((taskDetail: TaskDetailModel) => {
      this.task = taskDetail;
    });
  }
}
