import React from "react";

import {
  useGetAllHistoryQuery,
  useRemoveFromeHistoryMutation,
} from "../../api/historyApi";
import Header from "../../components/Header/Header";
import HistoryItem from "../../components/HistoryItem/HistoryItem";
import { HistoryList } from "../../components/HistoryList/HistoryList";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";

export default function History() {
  const { user, isAuth, logout } = useAuth();
  const {
    data: historyList = [],
    isLoading,
    isFetching,
  } = useGetAllHistoryQuery(user?.email);
  const [removeHistory] = useRemoveFromeHistoryMutation();

  const removeHistoryItem = (historyItem) => {
    removeHistory({ email: user?.email, item: historyItem });
  };

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <>
      <Header isAuth={isAuth} logout={logout} />
      <h2>История поиска</h2>
      {historyList.length > 0 ? (
        <div className="history-container">
          <HistoryList>
            {historyList.map((item) => (
              <HistoryItem
                key={item.name}
                historyItem={item}
                removeHistoryItem={removeHistoryItem}
              />
            ))}
          </HistoryList>
        </div>
      ) : (
        <span>Пока что здесь пусто...</span>
      )}
      {/* {historyList.length > 0 ? <h2>{historyList[0].name}</h2> : <h2>Net</h2>} */}
    </>
  );
}
