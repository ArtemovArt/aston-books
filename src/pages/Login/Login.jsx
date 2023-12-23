import React from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

import { useAuth } from "../../hooks/useAuth";
import { setUser } from "../../store/reducers/userSlice";
import "./Login.scss";

export default function Login() {
  const dispatch = useDispatch();

  const { login } = useAuth();

  const onFormSubmit = async (email, password) => {
    const user = await login(email, password);

    if (user) {
      dispatch(setUser(user));
    }
  };

  return (
    <>
      <h2 className="entry__title">Рады видеть снова!</h2>
      <Form formText="Войти" onFormSubmit={onFormSubmit} />
      <p className="entry__text">
        Ещё не зарегистрированы?{" "}
        <Link className="entry__link" to="/signup">
          Регистрация
        </Link>
      </p>
    </>
  );
}
