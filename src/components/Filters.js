import React, { useState } from "react";

export default function Filters({ filter, onlyTrue, onlyFalse, all }) {
  switch (filter) {
    case "ALL":
      return (
        <>
          <h2>All Todos: {all.length}</h2>
          {all}
        </>
      );
    case "COMPLETED":
      return (
        <>
          <h2>Completed Todos: {onlyTrue.length}</h2>
          {onlyTrue}
        </>
      );
    case "ACTIVE":
      return (
        <>
          <h2>Remaining Todos: {onlyFalse.length}</h2>
          {onlyFalse}
        </>
      );
    default:
      return null;
  }
}
