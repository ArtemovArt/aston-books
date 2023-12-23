import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../api/booksApi";
import { favApi } from "../api/favApi";
import { historyApi } from "../api/historyApi";
import { listenerMiddleware } from "./middlewares/userMiddleware";
import userReducer from "./reducers/userSlice";

const rootReducer = combineReducers({
  [booksApi.reducerPath]: booksApi.reducer,
  [favApi.reducerPath]: favApi.reducer,
  [historyApi.reducerPath]: historyApi.reducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      booksApi.middleware,
      favApi.middleware,
      historyApi.middleware,
      listenerMiddleware.middleware,
    ]),
});
