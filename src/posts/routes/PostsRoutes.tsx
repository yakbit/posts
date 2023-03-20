import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import {
  Home,
  PostPage,
  PostsPage,
  PostsUsuarioPage,
  SearchByTitlePage,
} from "../pages";

export const PostsRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="todosPosts" element={<PostsPage />} />
          <Route path="postsUsuario" element={<PostsUsuarioPage />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="search" element={<SearchByTitlePage />} />
          <Route path="post" element={<PostPage />} />
        </Routes>
      </div>
    </>
  );
};
