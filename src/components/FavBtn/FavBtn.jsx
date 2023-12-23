import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useFav } from "../../hooks/useFav";
import Loader from "../Loader/Loader";
import classes from "./favBtn.module.scss";

export default function FavBtn({ item }) {
  const { isAuth } = useAuth();
  const { isFav, addToFav, removeFromFav, isDisabled } = useFav();
  const navigate = useNavigate();
  const [isItemFav, setIsItemFav] = useState(isFav(item.id));

  const onFavClick = () => {
    if (!isAuth) {
      navigate({
        pathname: "/signin",
      });
    } else {
      if (!isItemFav) {
        addToFav(item);
        setIsItemFav((prevIsItemFav) => !prevIsItemFav);
      }
      if (isItemFav) {
        removeFromFav(item);
        setIsItemFav((prevIsItemFav) => !prevIsItemFav);
      }
    }
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onFavClick}
      className={classNames(classes.fav_btn, {
        [classes.active]: isItemFav,
      })}
    >
      {isDisabled ? (
        <Loader className={classes.loader} />
      ) : (
        <span className={classes.inner_font}>
          {isItemFav ? "В избранном" : "В избранное"}
        </span>
      )}
    </button>
  );
}
