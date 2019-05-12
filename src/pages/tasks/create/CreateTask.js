import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import FormButton from "../../../components/form/FormButton";
import FormTextInput from "../../../components/form/FormTextInput";
import FormWrapper from "../../../components/form/FormContainer";
import FormTextAreaInput from "../../../components/form/FormTextAreaInput";
import * as crypto from "../../../libs/crypto";
import axios from "axios";

const CreateTask = ({ history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={e => {
        // prevents page refresh on submit
        e.preventDefault();
        axios
          .post(`/api/task`, {
            id: crypto.hash(title + description),
            title,
            description
          })
          .then(() => history.push("/"));
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

export default withRouter(CreateTask);
