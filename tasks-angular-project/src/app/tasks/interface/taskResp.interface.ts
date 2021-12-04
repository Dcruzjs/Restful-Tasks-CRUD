export interface TasksResp {
    tasks: TaskResponse[];
}
export interface TaskResp {
    task: TaskResponse;
}

export interface TaskResponse {
    _id:         string;
    title:       string;
    description?: string;
    completed?:   string;
    createdAt?:   Date;
    updatedAt?:   Date;
    __v?:         number;
}
