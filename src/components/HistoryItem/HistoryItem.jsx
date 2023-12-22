import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
import { MyButton } from "../MyButton/MyButton";
import classes from "./HistoryItem.module.scss";

export default function HistoryItem({ historyItem, removeHistoryItem }) {
  const { setSearchValue } = useContext(SearchContext);

  const onClickHistoryItem = () => setSearchValue(historyItem.name);
  const onRemoveHistoryItem = () => removeHistoryItem(historyItem);

  return (
    <li className={classes.item}>
      <MyButton
        className={classes.btn}
        buttonType="icon"
        onClick={onRemoveHistoryItem}
      >
        <ClearIcon />
      </MyButton>
      <Link
        onClick={onClickHistoryItem}
        to={`/search?name=${historyItem.name}`}
        className={classes.item_link}
      />
      {historyItem.name}
    </li>
  );
}
