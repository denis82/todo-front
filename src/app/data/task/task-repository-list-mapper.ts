import { Mapper } from 'src/app/core/base/mapper';
import { GetTaskListEntity } from './task-entity';
import { TasksInstanceListModel } from 'src/app/core/domain/task.model';

export class TaskListRepositoryMapper extends Mapper<GetTaskListEntity, TasksInstanceListModel> {
  mapFrom(param: GetTaskListEntity): TasksInstanceListModel {
    return {
      id: param.id,
      title: param.title,
      flag: param.flag,
      completionDate:  param.completionDate,
      completionTime: param.completionTime,
    };
  }

  mapTo(param: TasksInstanceListModel): GetTaskListEntity {
    return {
      id: param.id,
      title: param.title,
      flag: param.flag,
      completionDate:  param.completionDate,
      completionTime: param.completionTime,
    };
  }
}
