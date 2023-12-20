import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { useAuth } from "../../hooks/useAuth";
import { setUser } from "../../store/reducers/userSlice";
import "./Registration.scss";

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, register } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const onFormSubmit = async (email, password) => {
    const user = await register(email, password);

    if (user) {
      dispatch(setUser(user));
    }
  };

  return (
    <div>
      <Header />
      <h2 className="entry__title">Зарегистрируйтесь, чтобы продолжить</h2>
      <Form formText="Зарегистрироваться" onFormSubmit={onFormSubmit} />
      <p className="entry__text">
        Уже есть аккаунт?{" "}
        <Link className="entry__link" to="/signin">
          Войти
        </Link>
      </p>
    </div>
  );
}
