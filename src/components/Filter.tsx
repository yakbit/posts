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
interface Posts {
  posts: Array<Post>;
}
export const Filter = (props: Props) => {
  const { posts, onFiltrar } = props;
  const [inputValue, setInputValue] = useState("");
  const handelFiltrar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setInputValue(target.value);
    console.log(target.value);
    const data = posts.filter((item) =>
      item.title.toLowerCase().trim().includes(target.value)
    );
    onFiltrar(data);
  };
  return (
    <div>
      <label>
        Fitrar por título:{" "}
        <input name="inputFiltro" onChange={handelFiltrar}></input>
      </label>
    </div>
  );
};
