import React from "react";

import { useGetBooksQuery } from "../../api/booksApi";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import "./MainPage.scss";

function MainPage() {
  const { data, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Возникла ошибка: {error.message}</div>;
  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        {/* TODO: Возможно, в дальнейшем стоит добавить отдельный глупый компонент List как контейнер для всех карточек книг, пока что оставил так */}
        <div className="content">
          <div className="cards-field">
            {data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                author={item.author}
                title={item.title}
                cover={item.cover}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
