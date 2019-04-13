import React, { useState } from "react";
import { connect } from "react-redux";
import { createTaskAction } from "../../../store/store";
import FormButton from "../../../components/form/FormButton";
import FormTextInput from "../../../components/form/FormTextInput";
import FormWrapper from "../../../components/form/FormContainer";
import FormTextAreaInput from "../../../components/form/FormTextAreaInput";

const CreateTask = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={e => {
        // prevents page refresh on submit
        e.preventDefault();
        createTask({
          id: "task-1", // TODO: calculer hash
          title,
          description
        });
      }}
    >
      <FormWrapper>
        <FormTextInput
          label="Title:"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <FormTextAreaInput
          label="Description:"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <FormButton>Create Task</FormButton>
      </FormWrapper>
    </form>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTaskAction(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTask);
