import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { PostsRoutes } from "../posts";

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
