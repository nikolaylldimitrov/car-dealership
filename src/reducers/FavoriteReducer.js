export const FavoriteReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return { favorites: [action.payload, ...state.favorites] };

    case "REMOVE_FAV":
      return { favorites: action.payload };

    default:
      return state;
  }
};
