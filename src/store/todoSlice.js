import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todoArray: [
      { title: "Excercise", status: false },
      { title: "Code", status: false }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoArray = [action.payload, ...state.todoArray];
    },
    deleteTodo: (state, action) => {
      state.todoArray = state.todoArray.filter(
        (_, id) => id !== action.payload
      );
    },
    toggleStatus: (state, action) => {
      state.todoArray = state.todoArray.map((obj, id) => {
        if (id !== action.payload) {
          return obj;
        }
        return {
          ...obj,
          status: !obj.status
        };
      });
    }
  }
});

export const { addTodo, deleteTodo, toggleStatus } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
//console.log(todoSlice.state.todoArray)
