import classNames from "classnames";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useFav } from "../../hooks/useFav";
import Loader from "../Loader/Loader";
import classes from "./favBtn.module.scss";

export default function FavBtn({ item }) {
  const { isAuth } = useAuth();
  const { isFav, addToFav, removeFromFav, isDisabled } = useFav();

  const [isItemFav, setIsItemFav] = useState(isFav(item.id));

  const onFavClick = () => {
    if (!isItemFav) {
      addToFav(item);
      setIsItemFav((prevIsItemFav) => !prevIsItemFav);
    }
    if (isItemFav) {
      removeFromFav(item);
      setIsItemFav((prevIsItemFav) => !prevIsItemFav);
    }
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onFavClick}
      className={classNames(classes.fav_btn, {
        [classes.active]: isItemFav,
        [classes.visible]: isAuth,
      })}
    >
      {isDisabled ? (
        <Loader className={classes.loader} />
      ) : (
        <span className={classes.inner_font}>
          {isItemFav ? "Удалить из избранного" : "В избранное"}
        </span>
      )}
    </button>
  );
}
