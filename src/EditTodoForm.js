import React from "react";
import useInput from "./Hooks/useInput";
import { TextField } from "@material-ui/core";
export default function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInput(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
