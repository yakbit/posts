import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { PostsPage, PostsUsuarioPage } from "../posts";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="todosPosts" element={<PostsPage />} />
        <Route path="postsUsuario" element={<PostsUsuarioPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/todosPosts" />} />
      </Routes>
    </>
  );
};
