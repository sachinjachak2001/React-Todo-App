import React from "react";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "./Hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

import { ListItemSecondaryAction } from "@material-ui/core";

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <div>
      <ListItem>
        {isEditing ? (
          <EditTodoForm
            editTodo={editTodo}
            id={id}
            task={task}
            toggleEditForm={toggle}
          />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>

            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
          </>
        )}
      </ListItem>
    </div>
  );
}
