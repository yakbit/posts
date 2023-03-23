import { createSlice } from "@reduxjs/toolkit";
import { localStorageTypes, Post } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";
const initialState: Post[] = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState: getLocalStorage(localStorageTypes.POSTS)
    ? JSON.parse(getLocalStorage(localStorageTypes.POSTS) as string)
    : initialState,
  reducers: {
    addPost: (state, action) => {
      setLocalStorage("posts", state);
      return action.payload;
    },
  },
});

export const { addPost } = postsSlice.actions;
