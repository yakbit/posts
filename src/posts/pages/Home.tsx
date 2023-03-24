import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  const handleGoAllPosts = () => {
    navigate("/todosPosts");
  };
  const handleGoByUserPosts = () => {
    navigate("/postsUsuario");
  };

  const handleNewPost = () => {
    navigate("/newPost");
  };
  return (
    <div className="col mt-5 animate__bounceInLeft">
      {/*  <h1 className="animate__animated animate__flipInX">
        animate__flipInX
      </h1> */}

      <button
        className="btn btn-outline-primary btn-lg animate__animated animate__bounceInLeft"
        style={{ width: 300 }}
        onClick={handleGoAllPosts}
      >
        Ver todos posts
      </button>
      <p />
      <button
        className="btn btn-outline-primary btn-lg animate__animated animate__bounceInLeft"
        style={{ width: 300 }}
        onClick={handleGoByUserPosts}
      >
        Ver posts por usuario
      </button>
      <p />
      <button
        className="btn btn-outline-primary btn-lg animate__animated animate__bounceInLeft"
        style={{ width: 300 }}
        onClick={handleNewPost}
      >
        Añadir nuevo post
      </button>
    </div>
  );
};
