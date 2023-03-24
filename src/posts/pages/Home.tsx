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
  const handleFavoritos = () => {
    navigate("/fovorites");
  };
  return (
    <div className="col mt-5 animate__bounceInLeft">
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
      <p />
      <button
        className="btn btn-outline-primary btn-lg animate__animated animate__bounceInLeft"
        style={{ width: 300 }}
        onClick={handleFavoritos}
      >
        Ver posts favoritos
      </button>
    </div>
  );
};
