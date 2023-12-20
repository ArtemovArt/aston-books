import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";

function Form({ formText, onFormSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const validationRules = {
    email: {
      required: "Заполните это поле",
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        message: "Email должен содержать символы '@' и '.'",
      },
    },
    password: {
      required: "Заполните это поле",
      minLength: {
        value: 8,
        message: "Длина пароля должна быть не менее 8 символов",
      },
    },
  };

  const onSubmit = (data) => {
    onFormSubmit(data.email, data.password);
    reset();
  };

  return (
    <div>
      <form
        className="entry__form"
        name="profile-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="entry__label">
            E-mail
            <input
              className="entry__input"
              placeholder="E-mail"
              type="email"
              {...register("email", validationRules.email)}
            />
            <span className="entry__error">{errors.email?.message}</span>
          </label>
          <label className="entry__label">
            Пароль
            <input
              className="entry__input"
              placeholder="Пароль"
              type="password"
              {...register("password", validationRules.password)}
            />
            <span className="entry__error">{errors.password?.message}</span>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className={`entry__button ${!isValid && "entry__button_disabled"}`}
            disabled={!isValid}
          >
            {formText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

Form.propTypes = {
  formText: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
