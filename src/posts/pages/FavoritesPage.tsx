import React from "react";
import { useSelector } from "react-redux";
import { List } from "../../components/List";
import { AppStore } from "../../redux/store";
export const FavoritesPage = () => {
  const stateFavorites = useSelector((store: AppStore) => store.favorites);
  return (
    <>
      <hr />
      <h1>Lista de favoritos</h1>
      <hr />
      <List posts={stateFavorites} loading={false} error={""}></List>
    </>
  );
};
