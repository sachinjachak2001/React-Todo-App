import React from "react";
import useInput from "./Hooks/useInput";
import { TextField } from "@material-ui/core";
import { Paper } from "@material-ui/core";
export default function TodoForm({ addTodos }) {
  const [value, handleChange, reset] = useInput("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodos(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
