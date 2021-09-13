import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./Hooks/useTodoState";

export default function TodoApp() {
  const initialTodos = [{ id: 1, task: "React Lecture", completed: false }];
  const { todos, addTodos, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TOODS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodos={addTodos} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

// -TodoApp
//   -TodoForm
//      -TodoList
//         -TodoIteam
