import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDetailModel } from 'src/app/core/domain/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskUpdateUsecase } from 'src/app/core/usecases/task-update-usecase';
import { TaskGetByIdUsecase } from 'src/app/core/usecases/task-get-by-id.usecase';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {

  public form!: FormGroup;
  public success?: boolean;
  public task?: TaskDetailModel;
  private taskPost?: TaskDetailModel;

  constructor(
    private _taskUpdate: TaskUpdateUsecase,
    private readonly _route: ActivatedRoute,
    private _taskGetById: TaskGetByIdUsecase,
  ) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(''),
      completionDate: new FormControl(''),
      completionTime: new FormControl(''),
      flag: new FormControl('' , [
        Validators.maxLength(1)
      ])
    })

    const taskId = this._route.snapshot.params['id'];
    this._taskGetById.execute(taskId).subscribe((taskDetail: TaskDetailModel) => {
      this.form.patchValue({
          title: taskDetail.title,
          completionDate: taskDetail.completionDate,
          completionTime: taskDetail.completionTime,
          flag: taskDetail.flag?.toString()
        })
    });
  }

  submitForm(){
    this.form.value.id = this._route.snapshot.params['id'];
    this.taskPost = this.form.value;
    if(this.taskPost){
      this._taskUpdate.execute(this.taskPost).subscribe(
        () => {
          this.success = true
        },
        () => {
          this.success = false
        },
        );
    }
  }
}
