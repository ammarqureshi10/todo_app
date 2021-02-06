import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));
export default function AddTodo() {
  const classes = useStyles();
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  function handleAdd(e) {
    e.preventDefault();
    dispatch(addTodo({ title: newTodo, status: false }));
    setNewTodo("");
  }
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleAdd}
      >
        <TextField
          id="standard-basic"
          label="add todo..."
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button>Add todo</button>
      </form>
    </>
  );
}
