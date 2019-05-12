import React, { useEffect, useState } from "react";
import Card from "../../../components/cards/Card";
import QrFromId from "../../qr/display/QrFromId";
import FormButton from "../../../components/form/FormButton";

const Task = ({ match }) => {
  const [task, setTask] = useState({});
  useEffect(() => {
    fetch(`/api/task/${match.params.id}`)
      .then(response => response.json())
      .then(json => setTask(json))
      .catch(e => console.log(e));
  }, []);
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

export default Task;
