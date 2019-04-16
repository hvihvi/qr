import React, { useState } from "react";
import { connect } from "react-redux";
import FormTextInput from "../../../components/form/FormTextInput";
import Card from "../../../components/Card";
import QrFromId from "../../qr/display/QrFromId";

const TaskList = ({ tasks }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
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
          <Card>
            <div>{task.id}</div>
            <QrFromId id={task.id} />
            <div>{task.title}</div>
            <div>{task.description}</div>
          </Card>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TaskList);