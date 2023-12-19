import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetBooksInfoQuery } from "../api/booksApi";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import "./About.scss";

function About() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBooksInfoQuery(id);
  const location = useLocation();
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Возникла ошибка: {error.message}</div>;
  }

  if (data) {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <div className="page-content">
            <div className="product">
              <img
                className="product-cover"
                src={data.cover}
                alt="product-cover"
              />
              <div className="info-wrapper">
                <div className="product-info">
                  <div className="author-title">
                    <span className="author-font">{data.authors}</span>
                    <span className="title-font">{data.title}</span>
                  </div>
                  {/* Вот дальше скорее всего это можно как-то декомпозировать, но пока не знаю как */}
                  <div className="description">
                    <div className="description-elements">
                      <span className="main-font">Категория</span>

                      <span className="main-font">Дата публикации</span>

                      <span className="main-font">Кол-во страниц</span>

                      <span className="main-font">Язык</span>

                      <span className="main-font">Издатель</span>
                    </div>
                    <div className="definitions">
                      <span className="second-font">
                        {data.categories[0].split("/")[0]}
                      </span>

                      <span className="second-font">{data.publishedDate}</span>

                      <span className="second-font">{data.pageCount}</span>

                      <span className="second-font">{data.language}</span>

                      <span className="second-font">{data.publisher}</span>
                    </div>
                  </div>
                </div>
                <div className="btn-section">
                  <div className="fav-btn">В избранное</div>
                  <Link
                    className="return-btn"
                    to={location?.state?.from?.pathname ?? "/"}
                  >
                    Назад
                  </Link>
                </div>
              </div>
            </div>

            <div className="summary">
              <div className="summary-text">{data.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
