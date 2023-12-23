import classNames from "classnames";

import PropTypes from "prop-types";
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
          src={cover}
          alt={cover}
        />
        <h3 className={classes.title}>{author}</h3>
        <h4 className={classes.title}>{title}</h4>
      </Link>
    </li>
  );
}

Suggest.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  cover: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Suggest.defaultProps = {
  author: "No data",
  cover: fake,
};
