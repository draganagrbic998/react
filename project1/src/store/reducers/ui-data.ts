import { UiAction } from "../actions/ui-data";

export const uiDataReducer = (state = true, action: { type: UiAction }): boolean => {
    if (action.type === UiAction.TOGGLE_TASK_FORM) {
        return !state;
    }
    return state;
}