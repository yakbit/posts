import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Filter } from "../../components/Filter";
import { List } from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
import { addPost } from "../../redux/states/posts";
interface Post {
  id: number;
  userId: number;
  title: String;
  body: String;
}

export const PostsPage = () => {
  const { posts, loading, error } = useFetch(
    new URL("https://jsonplaceholder.typicode.com/posts/")
  );
  const dispatch = useDispatch();
  const [listaFiltrada, setListaFiltrada] = useState<Array<Post>>();
  posts && dispatch(addPost(posts));
  const onFiltrar = (lista: Array<Post>) => {
    setListaFiltrada(lista);
  };
  return (
    <>
      <hr />
      <Filter posts={posts} onFiltrar={(event) => onFiltrar(event)} />
      <hr />
      <List
        posts={listaFiltrada ? listaFiltrada : posts}
        loading={loading}
        error={error}
      ></List>
      ;
    </>
  );
};
