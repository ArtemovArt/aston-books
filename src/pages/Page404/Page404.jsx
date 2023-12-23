import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="wrapper">
      <h1 className="name">
        <p className="error">Несуществующая страница</p>
        <Link to="/">Вернуться на главную</Link>
      </h1>
    </div>
  );
}
