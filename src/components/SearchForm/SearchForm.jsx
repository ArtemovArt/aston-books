import { debounce } from "lodash";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames";
import { LoaderIcon } from "react-hot-toast";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useLazyGetSuggestedBooksQuery } from "../../api/booksApi";
import { useAddToHistoryMutation } from "../../api/historyApi";
import { SearchContext } from "../../context/searchContext";
import { useAuth } from "../../hooks/useAuth";
import { MyButton } from "../MyButton/MyButton";
import Suggest from "../Suggest/Suggests";
import classes from "./SearchForm.module.scss";

export default function SearchForm() {
  const navigate = useNavigate();
  const { isAuth, user } = useAuth();

  const autoRef = useRef(null);
  const inputRef = useRef(null);

  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [isVisible, setIsVisible] = useState(false);

  const [trigger, { currentData, isLoading, isFetching }] =
    useLazyGetSuggestedBooksQuery();

  const [addHistory] = useAddToHistoryMutation();

  const handleClickOutside = (e) => {
    if (
      autoRef.current &&
      !autoRef.current.contains(e.target) &&
      e.target !== inputRef.current
    ) {
      setIsVisible(false);
    }
  };

  const getSuggests = useCallback(
    debounce((value) => {
      trigger(value);
    }, 500),
    []
  );

  const saveToHistory = () => {
    if (isAuth) {
      addHistory({ email: user?.email, name: searchValue });
    }
  };

  const navigateToSearchPage = () => {
    navigate({
      pathname: "/search",
      search: createSearchParams({
        name: searchValue,
      })
        .toString()
        .toLowerCase()
        .trim(),
    });
    setIsVisible(false);
  };

  const onSearchBtnClick = () => {
    navigateToSearchPage();
    saveToHistory();
  };

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearchFocus = () => {
    setIsVisible(true);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onSearchBtnClick();
    }
  };

  const onSuggestClick = () => {
    navigateToSearchPage();
    setSearchValue("");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  useEffect(() => {
    getSuggests(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.container}>
          <input
            className={classes.input}
            placeholder="Введите название книги или автора"
            ref={inputRef}
            type="search"
            value={searchValue}
            onChange={onChangeSearchValue}
            onFocus={onSearchFocus}
            onKeyDown={onPressEnter}
          />
          <MyButton
            className={classes.button}
            buttonType="icon"
            onClick={onSearchBtnClick}
          >
            <SearchIcon />
          </MyButton>
        </div>
        <div
          className={classNames(classes.suggest, {
            [classes.visible]: isVisible && searchValue.length > 0,
          })}
          ref={autoRef}
        >
          {isLoading || isFetching || !currentData ? (
            <LoaderIcon className={classes.loader} />
          ) : (
            <ul className={classes.list}>
              {currentData.map((item) => (
                <Suggest
                  key={item.id}
                  className={classes.item}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  cover={item.cover}
                  onClick={onSuggestClick}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
