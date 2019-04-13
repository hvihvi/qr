import { createStore } from "redux";

const initialState = {
  tasks: [
    {
      id: "abc123",
      title: "My first task",
      description: "Something to do"
    },
    {
      id: "abcd123",
      title: "My second task",
      description: "Something to do"
    },
    {
      id: "abce123",
      title: "My third task",
      description: "Something to do"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    default:
      return { ...state };
  }
};

const CREATE_TASK = "CREATE_TASK";
export const createTaskAction = task => ({
  type: CREATE_TASK,
  task
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
