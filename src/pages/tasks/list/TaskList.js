import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FormTextInput from "../../../components/form/FormTextInput";
import Card from "../../../components/cards/Card";
import QrFromId from "../../qr/display/QrFromId";
import { loadTasksAction } from "../../../store/store";

const TaskList = ({ tasks, loadTasks }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("/api/tasks")
      .then(response => response.json())
      .then(json => loadTasks(json))
      .catch(e => console.log(e));
  }, []);
  return (
    <>
      <FormTextInput
        label="Filter tasks:"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {tasks
        .filter(
          task => ("" + task.id).includes(search) || task.title.includes(search)
        )
        .map(task => (
          <Link to={`/task/${task.id}/`}>
            <Card>
              <div>{task.id}</div>
              <QrFromId id={task.id} />
              <div>{task.title}</div>
              <div>{task.description}</div>
            </Card>
          </Link>
        ))}
    </>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  loadTasks: tasks => dispatch(loadTasksAction(tasks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
