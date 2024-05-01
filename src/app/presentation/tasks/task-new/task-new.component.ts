import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDetailModel } from 'src/app/core/domain/task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskCreateUsecase } from 'src/app/core/usecases/task-create-usecase';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.scss']
})
export class TaskNewComponent {

  public task?: TaskDetailModel;
  public form!: FormGroup;

  constructor(
    private _router: Router,
    private _taskCreate: TaskCreateUsecase,
    private readonly _route: ActivatedRoute
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
  }

  submitForm(){
    this.task = this.form.value;
    if(this.task){
      this._taskCreate.execute(this.task).subscribe(() => {
        this._router.navigate([`/task`]);
      });
    }
  }
}
