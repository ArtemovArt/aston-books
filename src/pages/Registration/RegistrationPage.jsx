import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

import { useAuth } from "../../hooks/useAuth";
import { setUser } from "../../store/reducers/userSlice";
import "./Registration.scss";

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const { register } = useAuth();

  const onFormSubmit = async (email, password) => {
    const user = await register(email, password);

    if (user) {
      dispatch(setUser(user));
    }
  };

  return (
    <>
      <h2 className="entry__title">Зарегистрируйтесь, чтобы продолжить</h2>
      <Form formText="Зарегистрироваться" onFormSubmit={onFormSubmit} />
      <p className="entry__text">
        Уже есть аккаунт?{" "}
        <Link className="entry__link" to="/signin">
          Войти
        </Link>
      </p>
    </>
  );
}
