export enum UiAction {
    TOGGLE_TASK_FORM = 'toggle-task-form',
}

export interface ToggleTaskFormAction {
    type: typeof UiAction.TOGGLE_TASK_FORM;
}

export const toggleTaskForm = (): ToggleTaskFormAction => {
    return {
        type: UiAction.TOGGLE_TASK_FORM,
    }
}