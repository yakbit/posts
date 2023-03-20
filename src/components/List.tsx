import React from "react";
import { getPostsByUserId } from "../helpers";
interface Props {
  posts: Array<{
    userId: number;
    id: number;
    title: String;
    body: String;
  }>;
  loading: Boolean;
  error?: String;
  userId?: number;
}

export const List = (props: Props) => {
  const { posts, loading, error, userId } = props || {};
  const list = getPostsByUserId({ posts, userId });
  console.log(list);
  return (
    <ul>
      {error && <li>Error: {error}</li>}
      {loading && <div>Loading...</div>}
      {list?.map((post) => (
        <li key={post.id}>
          <h4>{post.userId}</h4>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <br />
        </li>
      ))}
    </ul>
  );
};
