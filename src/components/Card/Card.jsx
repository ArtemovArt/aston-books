import React from "react";

import { Link, useLocation } from "react-router-dom";
import fake from "../../images/fakeCover.png";
import FavBtn from "../FavBtn/FavBtn";
import classes from "./Card.module.scss";

function Card({ book }) {
  const location = useLocation();

  return (
    <div className={classes.card}>
      <img className={classes.top_image} src={book.cover || fake} alt="cover" />
      <div className={classes.content}>
        <div className={classes.description}>
          <span className={classes.author_font}>{book.author}</span>
          <span className={classes.book_font}>{book.title}</span>
        </div>

        <div className={classes.buttons}>
          <FavBtn item={book} />
          <Link
            className={classes.about}
            to={`/${book.id}`}
            state={{ from: location }}
          >
            <span className={classes.inner_font}>Подробнее</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
