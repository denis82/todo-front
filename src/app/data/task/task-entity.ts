export interface GetTaskListEntity {
  id?: number | null
  title?: string | null
  flag?: number | null
  completionDate?: string | null
  completionTime?: string | null
}

export interface GetTaskDetailEntity {
  id?: number | null
  title?: string | null
  flag?: number | null
  completionDate?: string | null
  completionTime?: string | null
}


export interface TaskPostEntity {
  params?: GetTaskDetailEntity
}
