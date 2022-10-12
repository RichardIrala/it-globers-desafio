import Homepage from "pages/Homepage";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="*"
        element={<h1>No existe la página a la que se intenta acceder</h1>}
      />
    </Routes>
  );
};
