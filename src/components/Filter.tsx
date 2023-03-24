import React, { useState } from "react";
interface Post {
  id: number;
  userId: number;
  title: String;
  body: String;
}
interface Props {
  posts: Array<Post>;
  onFiltrar: (lista: Array<Post>) => void;
}

export const Filter = (props: Props) => {
  const { posts, onFiltrar } = props;
  const [inputValue, setInputValue] = useState("");
  const handelFiltrar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setInputValue(target.value.toLowerCase());
    const data = posts.filter((item) =>
      item.title
        .toLowerCase()
        .trim()
        .includes(target.value.toLowerCase().trim())
    );
    onFiltrar(data);
  };
  return (
    <div>
      <label>
        Filtrar por título:{" "}
        <input
          style={{ borderColor: "#0dcaf0" }}
          name="inputFiltro"
          onChange={handelFiltrar}
        ></input>
      </label>
    </div>
  );
};
