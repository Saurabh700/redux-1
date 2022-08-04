import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import TodoItem from "./TodoItem";

const AllRoutes = () => {
  return (
    <div>
      AllRoutes
      <div>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/:id" element={<TodoItem />} />
        </Routes>
      </div>
    </div>
  );
};

export default AllRoutes;
