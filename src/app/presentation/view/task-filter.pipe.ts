import { Pipe, PipeTransform } from '@angular/core';
import { TasksInstanceListModel } from 'src/app/core/domain/task.model';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  private readonly _filterParams = new Map([
    ['1', 0],
    ['2', 1],
  ])
  transform(tasks: TasksInstanceListModel[], search: string): TasksInstanceListModel[] {
    if(!search.trim()){
      return tasks;
    }
    return tasks.filter(  task => task.flag === this._filterParams.get(search) )
  }

}
