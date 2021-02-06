import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filters from "./Filters";
import { Button } from "@material-ui/core";

export default function FilterList() {
  const [filter, setFilter] = useState("");
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
  return (
    <>
      <div>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFilter("ALL")}
        >
          ALL
        </Button>{" "}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFilter("COMPLETED")}
        >
          Completed
        </Button>{" "}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFilter("ACTIVE")}
        >
          ACTIVE
        </Button>
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
