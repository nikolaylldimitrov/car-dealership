export const AddToFav = (favorites) => (dispatch) => {
  console.log(favorites);
  dispatch({
    type: "ADD_TO_FAV",
    payload: favorites,
  });
};
export const RemoveFav = (favorites) => (dispatch, getState) => {
  const {
    favorites: { favorites },
  } = getState();

  dispatch({
    type: "REMOVE_FAV",
    payload: favorites.filter((t) => favorites !== t),
  });
};
