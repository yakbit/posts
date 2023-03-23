import { createSlice } from "@reduxjs/toolkit";
import { localStorageTypes, Post } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";
const initialState: Post[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(localStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage("posts", state);
      return action.payload;
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
