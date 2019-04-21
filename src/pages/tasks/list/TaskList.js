import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FormTextInput from "../../../components/form/FormTextInput";
import Card from "../../../components/Card";
import QrFromId from "../../qr/display/QrFromId";
import ScrollBar from "../../../components/form/ScrollBar";

const TaskList = ({ tasks }) => {
  const [search, setSearch] = useState("");
  return (
    <ScrollBar>
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
    </ScrollBar>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TaskList);
