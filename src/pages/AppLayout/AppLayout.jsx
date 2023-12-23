import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import "./AppLayout.scss";

export default function AppLayout() {
  const { isAuth, logout } = useAuth();
  const isUserLoading = useSelector((state) => state.userReducer.isLoading);

  return (
    <div className="layout">
      {isUserLoading ? (
        <Loader className="loader" />
      ) : (
        <>
          <Header isAuth={isAuth} logout={logout} />
          <div className="main">
            <div className="">
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </>
      )}
      <Toaster />
    </div>
  );
}
