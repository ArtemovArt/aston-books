import React from "react";

import fake from "../../images/fakeCover.png";
import classes from "./Card.module.scss";

function Card({ author, title, cover }) {
  return (
    <div className={classes.card}>
      <img className={classes.top_image} src={cover || fake} alt="cover" />
      <div className={classes.content}>
        <div className={classes.description}>
          <span className={classes.author_font}>{author}</span>
          <span className={classes.book_font}>{title}</span>
        </div>

        <div className={classes.buttons}>
          <div className={classes.add_btn}>
            <span className={classes.inner_font}>В избранное</span>
          </div>
          <div className={classes.about}>
            <span className={classes.inner_font}>Подробнее</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
