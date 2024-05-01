export interface TasksInstanceListModel {
  id?: number | null
  title?: string | null
  flag?: number | null
  completionDate?: string | null
  completionTime?: string | null
}

export interface TaskDetailModel {
  id?: number | null
  title?: string | null
  flag?: number | null
  completionDate?: string | null
  completionTime?: string | null
}


export interface TaskPostModel {
  params?: TaskDetailModel
}
