import React from "react";
import AddTodo from "./components/AddTodo";
import FilterList from "./components/FilterList";
import Header from "./components/header";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <AddTodo />
      <FilterList />
    </div>
  );
}
// with redux-toolkit
