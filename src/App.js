import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import QrRead from "./pages/qr/read/QrRead";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CreateTask from "./pages/tasks/create/CreateTask";
import TaskList from "./pages/tasks/list/TaskList";
import Task from "./pages/tasks/task/Task";
import Footer from "./pages/home/Footer";
import styled from "styled-components";

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

const Container = styled.section`
  display: flex;
  height: 100vh; //100% view height
  max-height: 100vh; //100% view height
  width: 100vw; // 100% view width
  max-width: 100vw; // 100% view width
  background-color: #282c34;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Body = styled.section`
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background: transparent;
  }
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Body>
            <Switch>
              {routes.map((route, key) => (
                <Route key={key} exact {...route} />
              ))}
            </Switch>
          </Body>
          <Footer />
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
