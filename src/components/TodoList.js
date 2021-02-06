import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatus } from "../store/todoSlice";
import { Button } from "@material-ui/core";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoArray = useSelector((state) => {
    return state.todoReducer.todoArray;
  });
  console.log(todoArray);
  return (
    <>
      <h2>Todo List</h2>
      <ul style={{ listStyle: "none" }}>
        {todoArray.map((obj, id) => {
          return (
            <li key={id}>
              {obj.status ? "✔" : null}
              <Button
                type="checkbox"
                onClick={() => dispatch(toggleStatus(id))}
              >
                <span style={{ textTransform: "none" }}>{obj.title}</span>
              </Button>
              <button onClick={() => dispatch(deleteTodo(id))}>x</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
/*
<button onClick={() => dispatch(toggleStatus(id))}>
                {obj.title}
              </button>
*/
// <button onClick={() => dispatch(deleteTodo(id))}>x</button>
