import React from "react";
import Card from "../../../components/Card";
import QrFromId from "../../qr/display/QrFromId";

const Task = ({ task }) => (
  <div>
    <Card>
      <h1>
        #{task.id} {task.title}
      </h1>
      <QrFromId id={task.id} />
      <text>{task.description}</text>
    </Card>
  </div>
);

export default Task;
