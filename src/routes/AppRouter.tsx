import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { PostsPage, PostsUsuarioPage, Home } from "../posts";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="todosPosts" element={<PostsPage />} />
        <Route path="postsUsuario" element={<PostsUsuarioPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
