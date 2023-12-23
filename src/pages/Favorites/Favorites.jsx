import React from "react";
import { useGetAllFavQuery } from "../../api/favApi";
import Card from "../../components/Card/Card";

import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import "./Favorites.scss";

function Favorites() {
  const { user } = useAuth();
  const {
    data: favourites = [],
    isLoading,
    isFetching,
  } = useGetAllFavQuery(user?.email);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div className="fav_wrapper">
      <div className="content">
        {favourites.length === 0 && !isLoading && (
          <span className="empty">Пока что здесь пусто...</span>
        )}
        <div className="cards-field">
          {favourites.map((item) => (
            <Card key={item.id} book={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
