import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import About from "../pages/About";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/:id" element={<About />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
