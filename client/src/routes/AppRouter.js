import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { TaskForm } from "../components/Form/TaskForm";

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="/create" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
  );
};
