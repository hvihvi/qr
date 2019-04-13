import React, { useState } from "react";
import { connect } from "react-redux";
import FormTextInput from "../../../components/form/FormTextInput";
import Card from "../../../components/Card";

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
        .filter(task => task.id.includes(search))
        .map(task => (
          <Card>
            <div>{task.id}</div>
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
