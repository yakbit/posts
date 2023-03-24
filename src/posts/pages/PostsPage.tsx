import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { Filter } from "../../components/Filter";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
import { addPost } from "../../redux/states/posts";
import { AppStore } from "../../redux/store";
interface Post {
  id: number;
  userId: number;
  title: String;
  body: String;
}
export interface PostPageInterface {}

export const PostsPage: React.FC<PostPageInterface> = () => {
  const { posts, loading, error } = useFetch(
    new URL("https://jsonplaceholder.typicode.com/posts/")
  );
  const dispatch = useDispatch();
  const [listaFiltrada, setListaFiltrada] = useState<Array<Post>>();
  /*  posts &&
    dispatch(addPost([{ id: 0, userId: 101, title: "algo", body: "otro" }])); */

  const onFiltrar = (lista: Array<Post>) => {
    setListaFiltrada(lista);
  };

  const handleRecibirDatos = () => {
    dispatch(addPost(posts));
  };

  const statePosts = useSelector((store: AppStore) => store.posts);

  return (
    <>
      <button className="btn btn-primary mt-4" onClick={handleRecibirDatos}>
        Recibir datos de fuera
      </button>
      <hr />
      <Filter posts={statePosts} onFiltrar={(event) => onFiltrar(event)} />
      <hr />
      <List
        posts={listaFiltrada ? listaFiltrada : statePosts}
        loading={loading}
        error={error}
      ></List>
    </>
  );
};
