import React from "react";
import { useGetAllFavQuery } from "../../api/favApi";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import "./Favorites.scss";

function Favorites() {
  const { user, isAuth, logout } = useAuth();
  const { data: favourites = [], isLoading } = useGetAllFavQuery(user?.email);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <Header isAuth={isAuth} logout={logout} />
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
      </div>
    </div>
  );
}

export default Favorites;
