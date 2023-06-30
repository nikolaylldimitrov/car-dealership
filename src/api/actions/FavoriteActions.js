export const AddToFav = (favorites) => (dispatch) => {
  dispatch({
    type: "ADD_TO_FAV",
    payload: favorites,
  });
};
export const RemoveFav = (favorite) => (dispatch, getState) => {
  const favorites = getState().Favorites.favorites;

  const remainingFav = favorites.filter((t) => favorite.id !== t.id);

  dispatch({
    type: "REMOVE_FAV",
    payload: remainingFav,
  });
};
