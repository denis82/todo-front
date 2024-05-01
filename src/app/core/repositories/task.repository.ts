import { Observable } from 'rxjs';
import {
  TasksInstanceListModel,
  TaskDetailModel
} from '../domain/task.model';

export abstract class TaskRepository {
  abstract taskGetById(id: string | null): Observable<TaskDetailModel>;
  abstract tasksGetAll(): Observable<TasksInstanceListModel>;
  abstract taskUpdate(param: TaskDetailModel): Observable<TaskDetailModel>;
  abstract taskCreate(param: TaskDetailModel): Observable<TaskDetailModel>;
  abstract taskDelete(id: number): Observable<TaskDetailModel>;
}
