import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createTaskAction } from "../../../store/store";
import FormButton from "../../../components/form/FormButton";
import FormTextInput from "../../../components/form/FormTextInput";
import FormWrapper from "../../../components/form/FormContainer";
import FormTextAreaInput from "../../../components/form/FormTextAreaInput";
import * as crypto from "../../../libs/crypto";
import ScrollBar from "../../../components/form/ScrollBar";

const CreateTask = ({ history, createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={e => {
        // prevents page refresh on submit
        e.preventDefault();
        createTask({
          id: crypto.hash(title + description),
          title,
          description
        });
        history.push("/");
      }}
    >
      <ScrollBar>
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
      </ScrollBar>
    </form>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTaskAction(task))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateTask)
);
