import classNames from "classnames";
import React from "react";

import classes from "./MyButton.module.scss";

export function MyButton({ className, buttonType, children, ...props }) {
  return (
    <button
      className={classNames(
        classes.button,
        {
          [classes.textButton]: buttonType === "text",
          [classes.iconButton]: buttonType === "icon",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
