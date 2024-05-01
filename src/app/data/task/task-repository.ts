import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { flatMap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import {
  TasksInstanceListModel,
  TaskDetailModel,
  TaskPostModel
} from 'src/app/core/domain/task.model';
import { TaskRepository } from 'src/app/core/repositories/task.repository';
import { TaskListRepositoryMapper } from './task-repository-list-mapper';
import { TaskDetailRepositoryMapper } from './task-repository-detail-mapper';
import {
  GetTaskDetailEntity,
  GetTaskListEntity,
  TaskPostEntity
} from './task-entity';

@Injectable({
  providedIn: 'root'
})
export class TaskApiRepository extends TaskRepository {
  static readonly TASK = 'task';
  mapperList = new TaskListRepositoryMapper();
  mapperDetail = new TaskDetailRepositoryMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  taskGetById(id: string): Observable<TaskDetailModel> {
    return this.http
      .get<GetTaskDetailEntity>(`${environment.baseUrl}/${TaskApiRepository.TASK}/${id}`)
      .pipe(map(this.mapperDetail.mapFrom));
  }

  tasksGetAll(): Observable<TasksInstanceListModel> {
    return this.http
      .get<GetTaskListEntity[]>(`${environment.baseUrl}/${TaskApiRepository.TASK}`)
      .pipe(flatMap((item) => item))
      .pipe(map(this.mapperList.mapFrom));
  }

  taskCreate(param: TaskDetailModel): Observable<TaskDetailModel> {
    return this.http
      .post<GetTaskDetailEntity>(
        `${environment.baseUrl}/${TaskApiRepository.TASK}`,
        param,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      ).pipe(map(this.mapperDetail.mapFrom));
  }

  taskUpdate(param: TaskDetailModel): Observable<TaskDetailModel> {
    return this.http
      .patch<GetTaskDetailEntity>(
        `${environment.baseUrl}/${TaskApiRepository.TASK}/${param.id}`,
        param,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      ).pipe(map(this.mapperDetail.mapFrom));
  }
  taskDelete(id: number): Observable<TaskDetailModel> {
    return this.http
      .delete<GetTaskDetailEntity>(
        `${environment.baseUrl}/${TaskApiRepository.TASK}/${id}`,
        { headers: new HttpHeaders().set('Content-Type', 'application/json')}
      ).pipe(map(this.mapperDetail.mapFrom));
  }
}
