import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { userConverter } from "../converter/userConverter";
import { firestore } from "../firebase";

export const historyApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "historyApi",
  tagTypes: ["History"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllHistory: builder.query({
      async queryFn(email) {
        try {
          if (!email) {
            return { data: [] };
          }
          const userLink = doc(firestore, "users", email).withConverter(
            userConverter
          );
          const user = await getDoc(userLink);

          const userData = user.data();
          if (userData) {
            return { data: userData.history };
          }
          return { data: [] };
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["History"],
    }),
    addToHistory: builder.mutation({
      async queryFn({ email, name }) {
        try {
          if (!email) {
            return { data: [] };
          }
          const userLink = doc(firestore, "users", email).withConverter(
            userConverter
          );

          await updateDoc(userLink, {
            history: arrayUnion({ name }),
          });
          return { data: { name } };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["History"],
    }),
    removeFromeHistory: builder.mutation({
      async queryFn({ email, item }) {
        try {
          if (!email) {
            return { data: [] };
          }
          const userLink = doc(firestore, "users", email).withConverter(
            userConverter
          );

          await updateDoc(userLink, {
            history: arrayRemove(item),
          });
          return { data: item };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["History"],
    }),
  }),
});

export const {
  useGetAllHistoryQuery,
  useAddToHistoryMutation,
  useRemoveFromeHistoryMutation,
} = historyApi;
