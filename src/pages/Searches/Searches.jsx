import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetBooksQuery } from "../../api/booksApi";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";

export default function Searches() {
  const [searchParams] = useSearchParams();
  const { isAuth, logout } = useAuth();
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
      <Header isAuth={isAuth} logout={logout} />
      <h2>Результаты поиска по запросу {`"${searchName}"`}</h2>
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
