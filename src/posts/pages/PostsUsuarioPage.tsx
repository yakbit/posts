import React, { useState } from "react";
import { List } from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
export const PostsUsuarioPage = () => {
  const { posts, loading, error } = useFetch(
    new URL("https://jsonplaceholder.typicode.com/posts/")
  );
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<number>(1);
  const onSeleccionado = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUsuarioSeleccionado(parseInt(event.target.value));
  };
  const listaUsuarios = posts.map((post) => {
    return post.userId;
  });
  const listaFiltrada = listaUsuarios.filter((item, index) => {
    return listaUsuarios.indexOf(item) === index;
  });

  return (
    <>
      <h1>Posts del usuario seleccionado</h1>
      <hr />
      <label>
        Selecciona un usuario:
        <select
          name="selectUser"
          onChange={(event) => onSeleccionado(event)}
          value={usuarioSeleccionado}
        >
          {/* <option value="default">Selecciona usuario...</option> */}

          {listaFiltrada?.map((userId) => (
            <option key={userId} value={userId}>
              {userId}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <List
        posts={posts}
        loading={loading}
        error={error}
        userId={usuarioSeleccionado}
      ></List>
    </>
  );
};
