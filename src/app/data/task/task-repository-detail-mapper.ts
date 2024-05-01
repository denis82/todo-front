import { Mapper } from 'src/app/core/base/mapper';
import { GetTaskDetailEntity } from './task-entity';
import { TaskDetailModel } from 'src/app/core/domain/task.model';

export class TaskDetailRepositoryMapper extends Mapper<GetTaskDetailEntity, TaskDetailModel> {
  mapFrom(param: GetTaskDetailEntity): TaskDetailModel {
    return {
      id: param.id,
      title: param.title,
      flag: param.flag,
      completionDate:  param.completionDate,
      completionTime: param.completionTime,
    };
  }

  mapTo(param: TaskDetailModel): GetTaskDetailEntity {
    return {
      id: param.id,
      title: param.title,
      flag: param.flag,
      completionDate:  param.completionDate,
      completionTime: param.completionTime,
    };
  }
}
