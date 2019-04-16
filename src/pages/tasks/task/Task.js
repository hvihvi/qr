import React from "react";
import { connect } from "react-redux";
import Card from "../../../components/Card";
import QrFromId from "../../qr/display/QrFromId";
import FormButton from "../../../components/form/FormButton";

const Task = ({ tasks, match }) => {
  const task = tasks.find(task => task.id + "" === match.params.id);
  return (
    <div>
      <Card>
        <h1>
          #{task.id} {task.title}
        </h1>
        <QrFromId id={task.id} />
        <div>{task.description}</div>
        <FormButton onclick={e => window.print()}>print icon todo</FormButton>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Task);
