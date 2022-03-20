import { UiAction } from "../actions/ui-data";

export interface UiState {
    showAddTaskForm: boolean;
}

export const uiReducer = (state: UiState = { showAddTaskForm: true }, action: { type: UiAction }): UiState => {
    if (action.type === UiAction.TOGGLE_TASK_FORM) {
        return { ...state, showAddTaskForm: !state.showAddTaskForm }
    }
    return state;
}