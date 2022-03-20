import axios from "axios";
import { Task } from "../../models/task";

const API_URL = `${process.env.REACT_APP_API_URL}/tasks`;

export enum TaskAction {
    READ_TASKS = "read-tasks",
    CREATE_TASK = "create-task",
    UPDATE_TASK = "update-task",
    DELETE_TASK = "delete-task",
}

export interface ReadTasksAction {
    type: typeof TaskAction.READ_TASKS;
    tasks: Task[];
}

export interface CreateTaskAction {
    type: typeof TaskAction.CREATE_TASK;
    task: Task;
}

export interface UpdateTaskAction {
    type: typeof TaskAction.UPDATE_TASK;
    id: number;
    task: Task;
}

export interface DeleteTaskAction {
    type: typeof TaskAction.DELETE_TASK;
    id: number;
}

export const readTasks = () => {
    return async (dispatch: (action: ReadTasksAction) => void) => {
        dispatch({
            type: TaskAction.READ_TASKS,
            tasks: (await axios.get(API_URL)).data as Task[]
        })
    }
}

export const createTask = (task: Task) => {
    return async (dispatch: (action: CreateTaskAction) => void) => {
        dispatch({
            type: TaskAction.CREATE_TASK,
            task: (await axios.post(API_URL, task)).data as Task,
        })
    }
}

export const updateTask = (id: number, task: Task) => {
    return async (dispatch: (action: UpdateTaskAction) => void) => {
        dispatch({
            type: TaskAction.UPDATE_TASK,
            id,
            task: (await axios.put(`${API_URL}/${id}`, task)).data as Task
        })
    }
}

export const deleteTask = (id: number) => {
    return async (dipsatch: (action: DeleteTaskAction) => void) => {
        await axios.delete(`${API_URL}/${id}`);

        dipsatch({
            type: TaskAction.DELETE_TASK,
            id,
        })
    }
}