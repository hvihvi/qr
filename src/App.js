import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import QrRead from "./pages/qr/read/QrRead";
import QrGen from "./pages/qr/gen/QrGen";
import { Provider } from "react-redux";
import Wrapper from "./components/Wrapper";
import { store } from "./store/store";
import CreateTask from "./pages/tasks/create/CreateTask";
import TaskList from "./pages/tasks/list/TaskList";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/qrread",
    component: QrRead
  },
  {
    path: "/qrgen",
    component: QrGen
  },
  {
    path: "/createtask",
    component: CreateTask
  },
  {
    path: "/tasklist",
    component: TaskList
  }
];

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Switch>
            {routes.map((route, key) => (
              <Route key={key} exact {...route} />
            ))}
          </Switch>
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
