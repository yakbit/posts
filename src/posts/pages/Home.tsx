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
  return (
    <div className="col mt-5">
      <button
        className="btn btn-outline-primary btn-lg "
        onClick={handleGoAllPosts}
      >
        Ver todos posts
      </button>
      <p />
      <button
        className="btn btn-outline-primary btn-lg"
        onClick={handleGoByUserPosts}
      >
        Ver posts por usuario
      </button>
    </div>
  );
};
