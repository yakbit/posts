import React from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { useFetch } from "../../helpers/useFetch";
export const PostsPage = () => {
  const { posts, loading, error } = useFetch(
    new URL("https://jsonplaceholder.typicode.com/posts/")
  );
  posts && console.log(posts);
  return (
    <>
      <Form></Form>
      <List posts={posts} loading={loading} error={error}></List>;
    </>
  );
};
