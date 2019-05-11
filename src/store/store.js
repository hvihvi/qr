import { createStore } from "redux";

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return { ...state, tasks: action.tasks };
    case EDIT_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    default:
      return { ...state };
  }
};

const LOAD_TASKS = "LOAD_TASK_LIST";
export const loadTasksAction = tasks => ({
  type: LOAD_TASKS,
  tasks
});

const EDIT_TASK = "EDIT_TASK";
export const editTaskAction = task => ({
  type: EDIT_TASK,
  task
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
