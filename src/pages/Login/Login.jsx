/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { useAuth } from "../../hooks/useAuth";
import { setUser } from "../../store/reducers/userSlice";
import "./Login.scss";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, login } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const onFormSubmit = async (email, password) => {
    const user = await login(email, password);

    if (user) {
      dispatch(setUser(user));
    }
  };

  return (
    <div>
      <Header />
      <h2 className="entry__title">Рады видеть снова!</h2>
      <Form formText="Войти" onFormSubmit={onFormSubmit} />
      <p className="entry__text">
        Ещё не зарегистрированы?
        <Link className="entry__link" to="/signup">
          Регистрация
        </Link>
      </p>
    </div>
  );
}
