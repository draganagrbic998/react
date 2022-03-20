import { TasksState } from "./reducers/task";

export interface RootReducer {
    tasks: TasksState;
    showAddTask: boolean;
}
