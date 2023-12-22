import classNames from "classnames";

import React from "react";
import { Link } from "react-router-dom";
import fake from "../../images/fakeCover.png";
import classes from "./Suggest.module.scss";

export default function Suggest({
  className,
  id,
  title,
  author,
  cover,
  onClick,
}) {
  return (
    <li key={id} className={classNames(classes.item, className)}>
      <Link className={classes.link} to={`/${id}`} onClick={onClick}>
        <img
          className={classes.image}
          width={50}
          height={50}
          src={cover || fake}
          alt={cover}
        />
        <h3 className={classes.title}>{author}</h3>
        <h4 className={classes.title}>{title}</h4>
      </Link>
    </li>
  );
}
