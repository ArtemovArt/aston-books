import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
