import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "../feature/posts/PostList";
import PostDetails from "../feature/posts/PostDetails";
import NewPostForm from "../feature/posts/NewPostForm";
import EditPostForm from "../feature/posts/EditPostForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/posts/:id/edit" element={<EditPostForm />} />
      <Route path="/new" element={<NewPostForm />} />
    </Routes>
  );
};

export default AppRoutes;
