import classNames from "classnames";

import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import classes from "./header.module.scss";

function Header({ isAuth, logout }) {
  const isLinkActive = ({ isActive }) =>
    classNames(classes.book_link, {
      [classes.book_link_active]: isActive,
    });
  const exitApp = () => {
    logout();
  };
  return (
    <div className={classes.main_header_container}>
      <div className={classes.navigation_bar}>
        {isAuth ? (
          <>
            <img className={classes.logo} src={logo} alt="logo" />
            <NavLink to="/" className={isLinkActive}>
              Все книги
            </NavLink>
            <NavLink to="/favs" className={isLinkActive}>
              Избранное
            </NavLink>
            <NavLink to="/history" className={isLinkActive}>
              История
            </NavLink>
          </>
        ) : (
          <>
            <img className={classes.logo} src={logo} alt="logo" />
            <NavLink to="/" className={isLinkActive}>
              Все книги
            </NavLink>
            <NavLink to="/signin" className={classes.book_link}>
              Избранное
            </NavLink>
            <NavLink to="/signin" className={classes.book_link}>
              История
            </NavLink>
          </>
        )}
      </div>
      {isAuth ? (
        <div className={classes.login_section}>
          <button
            type="button"
            className={classes.login_button}
            onClick={exitApp}
          >
            Выйти
          </button>
        </div>
      ) : (
        <div className={classes.login_section}>
          <NavLink to="/signin" className={classes.login_button}>
            Войти
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
