import { TasksState } from "./reducers/task";
import { UiState } from "./reducers/ui-data";

export interface RootReducer {
    tasks: TasksState;
    ui: UiState;
}
