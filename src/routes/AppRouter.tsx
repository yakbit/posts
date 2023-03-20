import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { PostsPage, PostsUsuarioPage, Home, PostsRoutes } from "../posts";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<PostsRoutes />} />
      </Routes>
    </>
  );
};
