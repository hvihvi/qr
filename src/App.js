import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import QrRead from "./pages/qr/read/QrRead";
import { Provider } from "react-redux";
import Wrapper from "./components/Wrapper";
import { store } from "./store/store";
import CreateTask from "./pages/tasks/create/CreateTask";
import TaskList from "./pages/tasks/list/TaskList";
import Task from "./pages/tasks/task/Task";
import Footer from "./pages/home/Footer";
import ScrollBar from "./components/form/ScrollBar";

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
    path: "/createtask",
    component: CreateTask
  },
  {
    path: "/task",
    component: TaskList
  },
  {
    path: "/task/:id",
    component: Task
  }
];

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollBar>
          <Wrapper>
            <Switch>
              {routes.map((route, key) => (
                <Route key={key} exact {...route} />
              ))}
            </Switch>
          </Wrapper>
        </ScrollBar>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
