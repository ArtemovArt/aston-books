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

export const favApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "favApi",
  tagTypes: ["Favourite"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllFav: builder.query({
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
            return { data: userData.favourite };
          }
          return { data: [] };
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["Favourite"],
    }),
    addToFav: builder.mutation({
      async queryFn({ email, item }) {
        try {
          if (!email) {
            return { data: [] };
          }
          const userLink = doc(firestore, "users", email).withConverter(
            userConverter
          );

          await updateDoc(userLink, {
            favourite: arrayUnion(item),
          });
          return { data: item };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["Favourite"],
    }),
    removeFromeFav: builder.mutation({
      async queryFn({ email, item }) {
        try {
          if (!email) {
            return { data: [] };
          }
          const userLink = doc(firestore, "users", email).withConverter(
            userConverter
          );

          await updateDoc(userLink, {
            favourite: arrayRemove(item),
          });
          return { data: item };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["Favourite"],
    }),
  }),
});

export const {
  useGetAllFavQuery,
  useAddToFavMutation,
  useRemoveFromeFavMutation,
} = favApi;
