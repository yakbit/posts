import { configureStore } from "@reduxjs/toolkit";
import { Post } from "../models";
import { favoritesSlice } from "./states/favorites";
import { postsSlice } from "./states/posts";
export interface AppStore {
  posts: Post[];
  favorites: Post[];
}

export default configureStore<AppStore>({
  reducer: {
    posts: postsSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
