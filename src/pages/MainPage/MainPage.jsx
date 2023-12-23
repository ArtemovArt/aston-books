import React from "react";

import { useGetBooksQuery } from "../../api/booksApi";
import Card from "../../components/Card/Card";

import Loader from "../../components/Loader/Loader";

import "./MainPage.scss";

function MainPage() {
  const {
    data: bookList = [],
    error,
    isLoading,
    isFetching,
  } = useGetBooksQuery();

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (error) {
    return <div>Возникла ошибка</div>;
  }

  return (
    <div className="wrapper">
      <div className="content">
        <div className="cards-field">
          {bookList.map((item) => (
            <Card key={item.id} book={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
