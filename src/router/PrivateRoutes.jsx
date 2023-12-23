import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
}
