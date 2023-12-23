import React from "react";

import {
  useGetAllHistoryQuery,
  useRemoveFromeHistoryMutation,
} from "../../api/historyApi";

import HistoryItem from "../../components/HistoryItem/HistoryItem";
import { HistoryList } from "../../components/HistoryList/HistoryList";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";
import "./History.scss";

export default function History() {
  const { user } = useAuth();
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
    <div className="history-wrapper">
      <span className="text">История поиска</span>
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
        <span className="empty-history">Пока что здесь пусто...</span>
      )}
    </div>
  );
}
