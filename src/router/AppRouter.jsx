import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PrivateRoutes } from "./PrivateRoutes";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const About = lazy(() => import("../pages/About/About"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const History = lazy(() => import("../pages/History/History"));
const Login = lazy(() => import("../pages/Login/Login"));
const Registration = lazy(
  () => import("../pages/Registration/RegistrationPage")
);
const Searches = lazy(() => import("../pages/Searches/Searches"));
const AppLayout = lazy(() => import("../pages/AppLayout/AppLayout"));
const Page404 = lazy(() => import("../pages/Page404/Page404"));

function AppRouter() {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":id" element={<About />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Registration />} />
        <Route path="search" element={<Searches />} />
        <Route path="*" element={<Page404 />} />
        <Route element={<PrivateRoutes isAuth={isAuth} />}>
          <Route path="favs" element={<Favorites />} />
          <Route path="history" element={<History />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
