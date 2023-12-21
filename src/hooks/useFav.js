import {
  useAddToFavMutation,
  useGetAllFavQuery,
  useRemoveFromeFavMutation,
} from "../api/favApi";
import { useAuth } from "./useAuth";

export const useFav = () => {
  const { user } = useAuth();
  const { data: favourites = [] } = useGetAllFavQuery(user?.email);

  const [addFav, addRes] = useAddToFavMutation();
  const [removeFav, removeRes] = useRemoveFromeFavMutation();

  const isItemFav = (id) => !!favourites.find((item) => item.id === id);

  const addToFav = async (data) => {
    await addFav({ email: user?.email, item: data });
  };

  const removeFromFav = async (data) => {
    await removeFav({ email: user?.email, item: data });
  };

  return {
    isFav: isItemFav,
    isDisabled: addRes.isLoading || removeRes.isLoading,
    addToFav,
    removeFromFav,
  };
};
