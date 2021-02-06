import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filters from "./Filters";

export default function Completed() {
  const todoArray = useSelector((state) => {
    return state.todoReducer.todoArray;
  });

  var a = todoArray.filter((obj, id) => obj.status !== false);
  var b = todoArray.filter((obj, id) => obj.status !== true);
  var all = todoArray.map((obj, id) => (
    <li key={id} style={{ listStyle: "none" }}>
      {obj.title}
    </li>
  ));
  console.log("onlyTrue", a);
  var onlyTrue = a.map((obj, id) => (
    <li key={id} style={{ listStyle: "none" }}>
      {obj.title}
    </li>
  ));
  var onlyFalse = b.map((obj, id) => (
    <li key={id} style={{ listStyle: "none" }}>
      {obj.title}
    </li>
  ));
  const [filter, setFilter] = useState("ALL");
  return (
    <>
      <div>
        <button onClick={() => setFilter("ALL")}>ALL</button>
        <button onClick={() => setFilter("COMPLETED")}>Completed</button>
        <button onClick={() => setFilter("ACTIVE")}>ACTIVE</button>
      </div>
      <Filters
        filter={filter}
        onlyTrue={onlyTrue}
        onlyFalse={onlyFalse}
        all={all}
      />
    </>
  );
}
