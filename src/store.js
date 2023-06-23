import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { FavoriteReducer } from "./reducers/FavoriteReducer";

const reducer = combineReducers({ Favorites: FavoriteReducer });
const initialState = { favorites: [] };
const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
