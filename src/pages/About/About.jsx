import React from "react";
import { useParams } from "react-router-dom";
import { useGetBooksInfoQuery } from "../../api/booksApi";

import Loader from "../../components/Loader/Loader";

import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "./About.scss";

function About() {
  const { id } = useParams();
  const { data, isLoading, isFetching, error } = useGetBooksInfoQuery(id);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (error) {
    return <div color="white">Возникла ошибка</div>;
  }

  if (data) {
    return (
      <div className="app">
        <div className="main">
          <ItemDetails
            id={data.id}
            title={data.title}
            authors={data.authors}
            cover={data.cover}
            categories={data.categories}
            language={data.language}
            publishedDate={data.publishedDate}
            publisher={data.publisher}
            description={data.description}
            pageCount={data.pageCount}
          />
        </div>
      </div>
    );
  }
}

export default About;
