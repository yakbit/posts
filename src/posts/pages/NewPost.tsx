import React from "react";
import { useSelector } from "react-redux";
import { Form } from "../../components/Form";
import { AppStore } from "../../redux/store";

export const NewPost = () => {
  const statePosts = useSelector((store: AppStore) => store.posts);
  return (
    <>
      <h1>Añade nuevo post</h1>
      <hr />
      <div className="col mt-5 animate__bounceInLeft">
        <Form statePosts={statePosts} />
      </div>

      <hr />
    </>
  );
};
