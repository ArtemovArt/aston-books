import { createListenerMiddleware } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { removeUser, setUser } from "../reducers/userSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setUser,
  effect: (action) => {
    toast.success(`User ${action.payload.email} logged in`);
  },
});

listenerMiddleware.startListening({
  actionCreator: removeUser,
  effect: () => {
    toast.success("Logged Out");
  },
});
