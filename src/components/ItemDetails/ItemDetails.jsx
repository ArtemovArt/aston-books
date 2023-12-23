import PropTypes from "prop-types";
import React from "react";

import fake from "../../images/fakeCover.png";
import FavBtn from "../FavBtn/FavBtn";
import "./ItemDetails.scss";

export default function ItemDetails({
  id,
  title,
  authors,
  categories,
  publisher,
  language,
  pageCount,
  cover,
  publishedDate,
  description,
}) {
  const item = {
    id,
    title,
    authors,
    categories,
    publisher,
    language,
    pageCount,
    cover,
    publishedDate,
    description,
  };
  return (
    <div className="page-content">
      <div className="product">
        <img
          className="product-cover"
          src={cover || fake}
          alt="product-cover"
        />
        <div className="info-wrapper">
          <div className="product-info">
            <div className="author-title">
              <span className="author-font">{authors}</span>
              <span className="title-font">{title}</span>
            </div>
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
                  {categories
                    ? categories[0].split("/")[0]
                    : "No Data Provided"}
                </span>

                <span className="second-font">
                  {publishedDate || "No Data"}
                </span>

                <span className="second-font">{pageCount}</span>

                <span className="second-font">{language}</span>

                <span className="second-font">{publisher}</span>
              </div>
            </div>
          </div>
          <div className="btn-section">
            <FavBtn item={item} />
          </div>
        </div>
      </div>

      <div className="summary">
        <div className="summary-text">{description}</div>
      </div>
    </div>
  );
}

ItemDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  cover: PropTypes.string,
  publishedDate: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  publisher: PropTypes.string,
  pageCount: PropTypes.number,
};

ItemDetails.defaultProps = {
  authors: ["No data provided"],
  cover: fake,
  publishedDate: "No data provided",
  description: "No data provided",
  language: "No data provided",
  publisher: "No data provided",
  pageCount: "No data provided",
};
