import React from "react";
import { connect } from "react-redux";
import Card from "../../../components/Card";
import QrFromId from "../../qr/display/QrFromId";

const Task = ({ tasks, match }) => {
  console.log(tasks);
  const task = tasks.find(task => task.id+ "" === match.params.id);
  console.log(task);
  return (
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
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Task);
