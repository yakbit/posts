import React from "react";

export const Home = () => {
  const handleGoAllPosts = () => {
    console.log("ir a página de todos los posts");
  };
  return <button onClick={handleGoAllPosts}>Ver todos posts</button>;
};
