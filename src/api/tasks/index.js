const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

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

app.get("/api/tasks", (_, res) => {
  try {
    res.send(tasks);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.post("/api/task/:id", (req, res) => {
  console.log(req);
  tasks.push(req.body);
  res.send(req.body);
});

if (!process.env.IS_NOW) {
  app.listen(9000);
}

module.exports = app;
