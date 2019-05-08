const express = require("express");

const app = express();

const tasks = [
  {
    id: 345,
    title: "My third task",
    description: "Something to do"
  },
  {
    id: 456,
    title: "My fourth task",
    description: "Something to do"
  }
];

const handler = (_, res) => {
  try {
    res.send(tasks);
  } catch (error) {
    res.send({ error: error.message });
  }
};

app.get("/api/tasks", (_, res) => {
  try {
    res.send(tasks);
  } catch (error) {
    res.send({ error: error.message });
  }
});

if (!process.env.IS_NOW) {
  app.listen(9000);
}

module.exports = app;
