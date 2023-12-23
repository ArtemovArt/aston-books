import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetBooksQuery } from "../../api/booksApi";
import Card from "../../components/Card/Card";

import Loader from "../../components/Loader/Loader";

import "./Searches.scss";

export default function Searches() {
  const [searchParams] = useSearchParams();

  const searchName = searchParams.get("name");
  const {
    data: booksList = [],
    isLoading,
    isFetching,
  } = useGetBooksQuery(searchName);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <>
      <div className="page-title">
        <span className="title-text">Результаты поиска</span>
      </div>

      <ul className="items">
        {booksList.length > 0 ? (
          booksList.map((item) => <Card key={item.id} book={item} />)
        ) : (
          <span>По вашему запросу ничего не найдено</span>
        )}
      </ul>
    </>
  );
}
