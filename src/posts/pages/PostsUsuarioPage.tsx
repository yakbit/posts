import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
import { addPost } from "../../redux/states/posts";
import { AppStore } from "../../redux/store";
export const PostsUsuarioPage = () => {
  const { posts, loading, error } = useFetch(
    new URL("https://jsonplaceholder.typicode.com/posts/")
  );

  const storePosts = useSelector((store: AppStore) => store.posts);
  const dispatch = useDispatch();

  const handleRecibirDatos = () => {
    dispatch(addPost(posts));
  };
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<number>(1);
  const onSeleccionado = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUsuarioSeleccionado(parseInt(event.target.value));
  };
  const listaUsuarios = storePosts.map((post) => {
    return post.userId;
  });
  const listaFiltrada = listaUsuarios.filter((item, index) => {
    return listaUsuarios.indexOf(item) === index;
  });

  return (
    <>
      <button className="btn btn-primary mt-4" onClick={handleRecibirDatos}>
        Recibir datos de fuera
      </button>
      <h1>Posts del usuario seleccionado</h1>
      <hr />
      <label>
        Selecciona un usuario:
        <select
          name="selectUser"
          onChange={(event) => onSeleccionado(event)}
          value={usuarioSeleccionado}
        >
          {listaFiltrada?.map((userId) => (
            <option key={userId} value={userId}>
              {userId}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <List
        posts={storePosts}
        loading={loading}
        error={error}
        userId={usuarioSeleccionado}
      ></List>
    </>
  );
};
