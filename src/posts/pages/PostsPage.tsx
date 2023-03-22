import React, { useState } from "react";
import { Filter } from "../../components/Filter";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
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
  const [listaFiltrada, setListaFiltrada] = useState<Array<Post>>();
  posts && console.log(listaFiltrada);
  const onFiltrar = (lista: Array<Post>) => {
    setListaFiltrada(lista);
  };
  return (
    <>
      <Form></Form>
      <Filter posts={posts} onFiltrar={(event) => onFiltrar(event)} />
      <List
        posts={listaFiltrada ? listaFiltrada : posts}
        loading={loading}
        error={error}
      ></List>
      ;
    </>
  );
};
