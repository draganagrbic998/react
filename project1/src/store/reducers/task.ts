import { Task } from "../../models/task";
import { CreateTaskAction, DeleteTaskAction, ReadTasksAction, TaskAction, UpdateTaskAction } from "../actions/tasks";

export interface TasksState {
    tasks: Task[];
}

export const tasksReducer = (state: TasksState = { tasks: [] }, action: { type: TaskAction }): TasksState => {
    if (action.type === TaskAction.READ_TASKS) {
        return { tasks: (action as ReadTasksAction).tasks }
    } else if (action.type === TaskAction.CREATE_TASK) {
        return { tasks: state.tasks.concat((action as CreateTaskAction).task) }
    } else if (action.type === TaskAction.UPDATE_TASK) {
        return { tasks: state.tasks.map(task => task.id === (action as UpdateTaskAction).id ? (action as UpdateTaskAction).task : task) }
    } else if (action.type === TaskAction.DELETE_TASK) {
        return { tasks: state.tasks.filter(task => task.id !== (action as DeleteTaskAction).id) }
    }
    return state;
}